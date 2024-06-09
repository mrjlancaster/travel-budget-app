import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Trip {
	id: number;
	origin: null | string;
	destination: null | string;
	departure_date: null | string | Date;
	return_date: null | string | Date;
	airline: null | string;
}

type InitialState = {
	upcomingTrips: Trip[];
	allTrips: Trip[];
	newTripDraft: null | Trip;
};

const initialState: InitialState = {
	upcomingTrips: [],
	allTrips: [],
	newTripDraft: null,
};

const tripsSlice = createSlice({
	name: "trips",
	initialState,
	reducers: {
		// Set trips state
		setUpcomingTrips: (state, action) => {
			console.error("UPCOMING TRIPS PAYLOAD", action.payload);
			state.upcomingTrips = action.payload;
		},

		setTrips: (state, action) => {
			console.error("TRIPS STATE PAYLOAD => ", action.payload);
			state.allTrips = action.payload;
		},

		addNewTrip: (state, action) => {
			const { payload } = action;
			console.log("New Trip Payload", payload);

			const newTrip = {
				...state.newTripDraft,
				...payload,
			};

			console.log("NEW ENTRY", newTrip);
			console.log("STATE", state.allTrips);

			state.newTripDraft = newTrip;
		},

		resetTripDraft: (state, action) => {
			state.newTripDraft = null;
		},
	},
});

export const { setUpcomingTrips, setTrips, addNewTrip, resetTripDraft } =
	tripsSlice.actions;

export const selectTrips = (state: RootState) => state.trips;
export const selectNewTripDraft = (state: RootState) =>
	state.trips.newTripDraft;

export default tripsSlice.reducer;
