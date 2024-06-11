import { api, config } from "../index";

export const usersApi = api.injectEndpoints({
	endpoints: (build) => ({
		updateUser: build.mutation({
			query: ({ ...data }) => ({
				url: "/users",
				method: "PATCH",
				body: data,
				headers: config.headers,
			}),
			// invalidatesTags: ["Post"],
		}),
	}),
});

export const { useUpdateUserMutation } = usersApi;
