import { View, Text, AppState } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { LockProps } from "../navigation/types";

type Props = {
	children: React.ReactNode;
};

const UserInactivityProvider = ({ children }: Props) => {
	const appState = useRef(AppState.currentState);
	const navigation = useNavigation();

	const handleAppStateChange = (nextAppState: any) => {
		console.log("appState", appState.current, nextAppState);

		if (nextAppState === "inactive") {
			// navigation.navigate("Lock");
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
1;
