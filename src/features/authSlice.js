import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

async function saveToken(obj) {
  await AsyncStorage.setItem(obj.name, obj.data);
}

async function removeItem(obj) {
  await AsyncStorage.removeItem(obj.name);
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
      saveToken(accessToken);
      saveToken(refreshToken);
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

export const selectUser = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default authSlice.reducer;
