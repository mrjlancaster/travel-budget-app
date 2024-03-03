import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface UserState {
	id: null | number;
	email: null | string;
}

const initialState: UserState = {
	id: null,
	email: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// Set new user state
		setUser: (state, action) => {},
	},
});

export const { setUser } = userSlice.actions;

// export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
