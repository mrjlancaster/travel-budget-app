import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../app/store";
import jwtDecode from "jwt-decode";

async function saveToken(key: string, value: string) {
	await AsyncStorage.setItem(key, value);
}

async function removeItem(key: string) {
	await AsyncStorage.removeItem(key);
}

interface User {
	id: number;
	email: string;
}

type JwtPayload = {
	user: User;
	isAuthenticated: boolean;
};

interface AuthState {
	user: null | User;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
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
			const decoded = jwtDecode<JwtPayload>(accessToken);
			console.error("decoded => ", decoded);

			state.user = decoded.user;
			state.isAuthenticated = decoded.isAuthenticated;
			saveToken("accessToken", accessToken);
			saveToken("refreshToken", refreshToken);
		},

		initializeFromToken: (state, action) => {
			const accessToken = action.payload;
			const decoded = jwtDecode<JwtPayload>(accessToken);

			state.user = decoded.user;
			state.isAuthenticated = decoded.isAuthenticated;
		},

		logout: () => {
			removeItem("accessToken");
			removeItem("refreshToken");

			return initialState;
		},
	},
});

export const { setCredentials, logout, initializeFromToken } =
	authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth?.user;

export default authSlice.reducer;
