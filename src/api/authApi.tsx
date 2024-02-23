import { apiInstance } from "./axios";

export const refreshToken = async () => {
	try {
		const { data } = await apiInstance.get("/api/auth/refresh");

		return data.data;
	} catch (err) {
		console.log(err);
	}
};
