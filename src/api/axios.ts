import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshToken } from "./authApi";
import { BASE_URL } from "@env";

const baseURL = BASE_URL;

export const apiInstance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

apiInstance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("accessToken");
		const decoded = jwtDecode(token);

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
		const refreshKey = await AsyncStorage.getItem("refreshToken");
		console.error("Error code", error.response.status);

		if (error.response.status === 403 && !refreshKey) {
			await AsyncStorage.clear();
		}

		if (error?.response?.status === 403) {
			const newTokens = await refreshToken();
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
