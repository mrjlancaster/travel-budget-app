import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	logout,
	selectAuth,
	selectUser,
	setCredentials,
} from "../features/authSlice";
import { initializeFromToken } from "../features/authSlice";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import BottomNav from "./BottomNav";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import jwtDecode from "jwt-decode";
import moment from "moment";
import { getAccessToken, getRefreshToken } from "../utils";
import { useRefreshTokenMutation } from "../services/api/authApi";
import UserInactivityProvider from "../providers/UserInactivity";
import { apiInstance } from "../api/axios";
import axios, { AxiosResponse } from "axios";
import { refreshToken } from "../api/authApi";

const Root = () => {
	const { user, isAuthenticated } = useAppSelector(selectAuth);
	console.error("IS AUTH", isAuthenticated);
	const [loading, setLoading] = useState(true);
	// const [handleRefresh, { isLoading }] = useRefreshTokenMutation();
	const dispatch = useAppDispatch();
	console.log("IS AUTH", isAuthenticated);

	const initAsync = async () => {
		try {
			const token = await getAccessToken();
			const refrehToken = await getRefreshToken();

			if (token && refrehToken) {
				dispatch(
					setCredentials({ accessToken: token, refreshToken: refrehToken })
				);

				// const { data }: AxiosResponse = await apiInstance.get(
				// 	"/auth/token/verify"
				// );
				// console.log("Response", data);
			}

			// if (token) {
			// 	const decoded: { exp: number } = jwtDecode(token);
			// 	const expiration: any = decoded.exp * 1000;
			// 	const currentDate = new Date();

			// 	console.log("TOKEN EXPIRATION ", expiration, currentDate.getTime());
			// 	console.log("CURRENT TIME", expiration < currentDate.getTime());

			// 	if (expiration < currentDate.getTime()) {
			// 		const { data } = await handleRefresh(refreshToken).unwrap();
			// 		console.log("REFRESHED TOKEN ON INIT ", data);
			// 		dispatch(setCredentials(data.data));
			// 	} else {
			// 		dispatch(initializeFromToken(token));
			// 	}
			// }
		} catch (err: any) {
			console.log(err);
			if (err.response) {
				const { message } = err.response.data;
				console.log(err.response.data);
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// initAsync();
		setLoading(false);
	}, [isAuthenticated, user]);

	if (loading) {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator size="large" color="#000" />
			</SafeAreaView>
		);
	}

	// return <BottomNav />;

	return (
		<UserInactivityProvider>
			{!isAuthenticated ? <BottomNav /> : <AuthStack />}
		</UserInactivityProvider>
	);
};

export default Root;
