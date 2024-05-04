import { View, Text, AppState } from "react-native";
import React, { useEffect, useRef } from "react";

const UserInactivityProvider = ({ children }) => {
	const appState = useRef(AppState.currentState);

	const handleAppStateChange = (nextAppState: any) => {
		console.log("appState", appState.current, nextAppState);

		if (nextAppState === "inactive") {
		}
		appState.current = nextAppState;
	};

	useEffect(() => {
		const subscription = AppState.addEventListener(
			"change",
			handleAppStateChange
		);

		return () => subscription.remove();
	}, []);

	return children;
};

export default UserInactivityProvider;
