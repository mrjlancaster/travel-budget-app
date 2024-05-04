import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { initializeFromToken, logout } from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken, getRefreshToken, saveInStorage } from "../utils";
import { API_URL } from "@env";

const baseUrl = API_URL;
const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: "include",
	prepareHeaders: async (headers, { endpoint }) => {
		const token = await getAccessToken();

		if (token && endpoint !== "refresh") {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

export const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	const statusCode = result.error?.status;
	console.error("STATUS CODE", statusCode);
	const isUnauthenticated = statusCode === 401 || statusCode === 403;
	console.log("RESULTS", result);

	if (result.error && isUnauthenticated) {
		const refreshToken = await getRefreshToken();
		// try to get a new token
		const options = {
			url: "/auth/refresh",
			method: "POST",
			body: { refreshToken },
		};

		const { data } = await baseQuery(
			options,
			{
				...api,
				endpoint: "refresh",
			},
			extraOptions
		);

		if (data?.success) {
			console.error("ACCESS TOKEN IN SERVICES", data.data.accessToken);
			await saveInStorage("accessToken", data.data.accessToken);
			// store the new token
			api.dispatch(initializeFromToken(data.data));
			// retry the initial query
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logout());
		}
	}

	return result;
};

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
	refetchOnReconnect: true,
});
