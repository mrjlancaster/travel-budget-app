import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeFromToken } from "../features/authSlice";
// import PrivateNavigation from "./PrivateNavigation";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import BottomNav from "./BottomNav";

const Root = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { user, isAuthenticated } = useSelector(selectUser);

	useEffect(() => {
		const verifyUser = async () => {
			setLoading(true);
			const token = await AsyncStorage.getItem("accessToken");

			if (token) {
				dispatch(initializeFromToken(token));
			}

			setLoading(false);
		};

		verifyUser();
	}, []);

	if (loading) {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator size="large" color="#000" />
			</SafeAreaView>
		);
	}

	return isAuthenticated ? <BottomNav /> : <AuthStack />;
};

export default Root;
