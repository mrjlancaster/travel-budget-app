import { api, config } from "../index";

interface Trip {
	origin: string;
	destination: string;
	departure_date: Date;
	return_date: Date;
	airline: string;
}

type Trips = Trip[];

export const tripsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTrips: builder.query<Trips, void>({
			query: () => ({
				url: "/api/trips",
			}),
			transformResponse: (response: { data: Trips }, meta, arg) =>
				response.data,
		}),

		createTrip: builder.mutation({
			query: (payload) => ({
				url: "/api/trips",
				method: "POST",
				body: payload,
			}),
		}),

		getTripById: builder.query<Trip, void>({
			query: (id) => ({
				url: `/api/trips/${id}`,
			}),
		}),

		updateTrip: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/api/trips/${id}`,
				method: "PATCH",
				body: patch,
			}),
		}),

		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/api/trips/${id}`,
				method: "DELETE",
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
} = tripsApi;
