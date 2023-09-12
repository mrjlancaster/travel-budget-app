import { api, config } from "../index";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: "/api/auth/login",
				method: "POST",
				body: data,
				headers: config.headers,
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: "/api/auth/register",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
