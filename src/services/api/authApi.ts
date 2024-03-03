import { api, config } from "../index";

interface Credentials {
	email: string;
	password: string;
}

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (credentials) => ({
				url: "/api/auth/login",
				method: "POST",
				body: credentials,
				// headers: config.headers,
			}),
		}),

		register: build.mutation({
			query: (data) => ({
				url: "/api/auth/register",
				method: "POST",
				body: data,
			}),
		}),

		verify: build.mutation({
			query: () => ({
				url: "/api/auth/verify",
				method: "POST",
				body: "",
			}),
		}),

		refreshToken: build.mutation({
			query: (token) => ({
				url: "/api/auth/refresh",
				method: "POST",
				body: { refreshToken: token },
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useRefreshTokenMutation,
} = authApi;
