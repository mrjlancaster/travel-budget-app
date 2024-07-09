import { api, config } from "../index";

interface Trip {
	origin: string;
	destination: string;
	departure_date: Date;
	return_date: Date;
	airline: string;
}

interface Airline {
	name: string;
	iata_code: string;
}

type Airlines = Airline[];
type Trips = Trip[];

export const tripsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUpcomingTrips: builder.query<Trips, void>({
			query: () => ({
				url: "/trips/upcoming",
			}),
			transformResponse: (response: { data: Trips }, meta, arg) => {
				return response.data;
			},
		}),
		getTrips: builder.query<Trips, void>({
			query: () => ({
				url: "/trips",
			}),
			transformResponse: (response: { data: Trips }, meta, arg) => {
				return response.data;
			},
		}),

		createTrip: builder.mutation({
			query: (payload) => ({
				url: "/trips",
				method: "POST",
				body: payload,
			}),
		}),

		getTripById: builder.query<Trip, void>({
			query: (id) => ({
				url: `/trips/${id}`,
			}),
		}),

		updateTrip: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/trips/${id}`,
				method: "PATCH",
				body: patch,
			}),
		}),

		getAirlines: builder.query({
			query: () => ({
				url: "/trips/airlines",
			}),
			transformResponse: (response: { data: Airlines }, meta, arg) => {
				return response.data;
			},
			transformErrorResponse: (response, meta, arg) => response.status,
			keepUnusedDataFor: 0.0001,
		}),

		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/trips/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetUpcomingTripsQuery,
	useGetTripsQuery,
	useGetTripByIdQuery,
	useCreateTripMutation,
	useUpdateTripMutation,
	useDeleteTripMutation,
	useGetAirlinesQuery,
} = tripsApi;
