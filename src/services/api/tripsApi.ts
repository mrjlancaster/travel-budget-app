import { api, config } from "../index";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		getTrips: build.query({
			query: () => ({
				url: "/api/trips",
				headers: config.headers,
			}),
		}),

		createTrip: build.mutation({
			query: (payload) => ({
				url: "/api/trips",
				method: "POST",
				body: payload,
				headers: config.headers,
			}),
		}),

		getTripById: build.query({
			query: (id) => ({
				url: `/api/trips/${id}`,
				headers: config.headers,
			}),
		}),

		updateTrip: build.mutation({
			query: ({ id, ...patch }) => ({
				url: `/api/trips/${id}`,
				method: "PATCH",
				body: patch,
				headers: config.headers,
			}),
		}),

		deleteTrip: build.mutation({
			query: (id) => ({
				url: `/api/trips/${id}`,
				method: "DELETE",
				headers: config.headers,
			}),
		}),
	}),
});

export const {
	useGetTripsQuery,
	useGetTripByIdQuery,
	useCreateTripMutation,
	useUpdateTripMutation,
	useDeleteTripMutation,
} = authApi;
