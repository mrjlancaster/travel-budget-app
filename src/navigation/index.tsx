import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectAuth, selectUser } from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeFromToken } from "../features/authSlice";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import BottomNav from "./BottomNav";
import { useAppSelector, useAppDispatch } from "../hooks";

const Root = () => {
	const { isAuthenticated } = useAppSelector(selectAuth);
	const [loading, setLoading] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setLoading(true);

		const verifyUser = async () => {
			const token = await AsyncStorage.getItem("accessToken");

			if (token) {
				dispatch(initializeFromToken(token));
			}
		};

		verifyUser();
		setLoading(false);
	}, [isAuthenticated]);

	if (loading) {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator size="large" color="#000" />
			</SafeAreaView>
		);
	}

	// return <BottomNav />;

	return isAuthenticated ? <BottomNav /> : <AuthStack />;
};

export default Root;
