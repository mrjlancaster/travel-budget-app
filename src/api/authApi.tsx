import { apiInstance } from "./axios";

type Payload = {
	email: string;
	password: string;
	confirmPassword: string;
};

export const register = async (payload: Payload) => {
	try {
		const resposne = await apiInstance.get("/auth/register");

		return resposne;
	} catch (err) {
		console.log(err);
	}
};

export const refreshToken = async () => {
	try {
		const { data } = await apiInstance.get("/api/auth/refresh");

		return data.data;
	} catch (err) {
		console.log(err);
	}
};
