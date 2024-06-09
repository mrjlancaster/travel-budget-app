import { api, config } from "../index";

interface Credentials {
	email: string;
	password: string;
}

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
				// headers: config.headers,
			}),
		}),

		register: build.mutation({
			query: (data) => ({
				url: "/auth/register",
				method: "POST",
				body: data,
			}),
		}),

		useVerifyAuthMutation: build.mutation({
			query: () => ({
				url: "/auth/token/verify",
				method: "GET",
			}),
		}),

		refreshToken: build.mutation({
			query: (token) => ({
				url: "/auth/refresh",
				method: "POST",
				body: { refreshToken: token },
			}),
		}),

		resetPassword: build.mutation({
			query: (email) => ({
				url: "/auth/forgot-password",
				method: "POST",
				body: { email },
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useVerifyAuthMutation,
	useRefreshTokenMutation,
	useResetPasswordMutation,
} = authApi;
