import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

async function saveToken(key: string, value: string) {
	await AsyncStorage.setItem(key, value);
}

async function removeItem(key: string) {
	await AsyncStorage.removeItem(key);
}

interface AuthState {
	user: null | object;
	isAuthenticated: boolean;
}

const initialState = {
	user: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// Set new user state
		setCredentials: (state, action) => {
			console.log("PAYLOAD => ", action.payload);
			const { accessToken, refreshToken } = action.payload;
			const decoded = jwt_decode(accessToken);
			console.log("decoded => ", decoded);

			state.user = decoded.user;
			state.isAuthenticated = decoded.isAuthenticated;
			saveToken("accessToken", accessToken);
			saveToken("refreshToken", refreshToken);
		},

		logout: () => {
			removeItem("accessToken");
			removeItem("refreshToken");

			return initialState;
		},
		initializeFromToken: (state, action) => {
			const accessToken = action.payload;
			const decoded = jwt_decode(accessToken);
			console.log("init from token decoded => ", decoded);

			state.user = decoded.user;
			state.isAuthenticated = decoded.isAuthenticated;
		},
	},
});

export const { setCredentials, logout, initializeFromToken } =
	authSlice.actions;

export const selectUser = (state: AuthState) => {
	return {
		user: state.user,
		isAuthenticated: state.isAuthenticated,
	};
};

export default authSlice.reducer;
