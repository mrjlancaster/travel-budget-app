import { api, config } from "../index";

export const usersApi = api.injectEndpoints({
	endpoints: (build) => ({
		addTsaPreCheck: build.mutation({
			query: (data) => ({
				url: "/users",
				method: "PATCH",
				body: data,
				// headers: config.headers,
			}),
		}),
	}),
});

export const { useAddTsaPreCheckMutation } = usersApi;
