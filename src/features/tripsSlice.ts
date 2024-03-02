import { createSlice } from "@reduxjs/toolkit";

interface NewTripProps {
	origin: null | string;
	destination: null | string;
	departureDate: null | string;
	returnDate: null | string;
	airline: null | string;
}

interface InitialState {
	trips: object[];
	newTripDraft: null | NewTripProps;
}

const initialState: InitialState = {
	trips: [],
	newTripDraft: null,
};

const tripsSlice = createSlice({
	name: "trips",
	initialState,
	reducers: {
		// Set trips state
		setTrips: (state, action) => {
			console.log("PAYLOAD => ", action.payload);
			state.trips = action.payload;
		},
		addNewTrip: (state, action) => {
			const { payload } = action;
			console.log("PAYLOAD", payload);

			const newTrip = { ...state.newTripDraft };

			const objValues = Object.values(newTrip);
			console.error("VALUES", objValues);

			if (payload.type === "origin") {
				newTrip.origin = payload.origin;
			} else if (payload.type === "dest") {
				newTrip.destination = payload.destination;
			} else if (payload.type === "departure") {
				newTrip.departureDate = payload.date;
			} else if (payload.type === "return") {
				newTrip.returnDate = payload.date;
			}

			console.log("NEW ENTRY", newTrip);
			console.log("STATE", state.trips);

			const arr = [...state.trips, newTrip];
			// state.trips = arr;
			// state.newTripDraft = newTrip;
		},
	},
});

export const { setTrips, addNewTrip } = tripsSlice.actions;

export const selectTrips = (state: InitialState) => state.trips.trips;
export const selectNewTripDraft = (state: InitialState) =>
	state.trips.newTripDraft;

export default tripsSlice.reducer;
