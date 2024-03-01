import { api, config } from "../index";

interface Trip {
	origin: string;
	destination: string;
	departureDate: Date;
	returnDate: Date;
	airline: string;
}

type Trips = Trip[];

export const tripsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTrips: builder.query<Trips, void>({
			query: () => ({
				url: "/api/trips",
				// headers: config.headers,
			}),
			transformResponse: (response: { data: Trips }, meta, arg) =>
				response.data,
		}),

		createTrip: builder.mutation({
			query: (payload) => ({
				url: "/api/trips",
				method: "POST",
				body: payload,
				// headers: config.headers,
			}),
		}),

		getTripById: builder.query<Trip, void>({
			query: (id) => ({
				url: `/api/trips/${id}`,
				// headers: config.headers,
			}),
		}),

		updateTrip: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/api/trips/${id}`,
				method: "PATCH",
				body: patch,
				// headers: config.headers,
			}),
		}),

		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/api/trips/${id}`,
				method: "DELETE",
				// headers: config.headers,
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
