import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "http://localhost:8000";

export const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: async (headers) => {
		const token = await AsyncStorage.getItem("accessToken");

		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

export const api = createApi({
	reducerPath: "api",
	baseQuery,
	endpoints: () => ({}),
});
