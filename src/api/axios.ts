import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshToken } from "./authApi";
import { BASE_URL, API_URL } from "@env";
import { clearStorage, getRefreshToken } from "../utils";

export const apiInstance = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

apiInstance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

// Add a response interceptor
apiInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	async function (error) {
		const refreshToken = await getRefreshToken();
		console.log("REFRESH TOKEN ?", refreshToken);
		console.error("Error code", error?.response?.status);

		if (!refreshToken) {
			await clearStorage();
		}

		if (error?.response?.status === 403) {
			// const newTokens = await refreshToken();
		}
		// const statusCode = err?.response?.status;

		// if (error.response.status === 500) {
		// 	// handle 500 error
		// }

		// if (!error.response) {
		// 	throw new Error(error);
		// }

		// if (!refreshKey) {
		// 	throw new HttpError(
		// 		401,
		// 		"Unauthorized",
		// 		"User authentication required!"
		// 	);
		// }
		return Promise.reject(error);
	}
);
