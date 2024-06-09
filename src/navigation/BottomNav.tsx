import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
import TripsStack from "./TripsStack";
import TsaPreCheckScreen from "../screens/tsaPreCheck/TsaPreCheckScreen";
import { BottomNavStackParamList } from "./types";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator<BottomNavStackParamList>();

type Props = {
	color: string;
	size: number;
};

function homeTabIcon({ color, size }: Props) {
	return <Ionicons name="home" size={size} color={color} />;
}

function tripsTabIcon({ color, size }: Props) {
	return <Fontisto name="suitcase" size={size} color={color} />;
}

function profileTabIcon({ color, size }: Props) {
	return <Ionicons name="person" size={size} color={color} />;
}

const BottomNav = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				// tabBarShowLabel: false,
				headerShown: false,
				tabBarActiveTintColor: "#17202A",
			}}
		>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{ tabBarIcon: homeTabIcon, title: "Home" }}
			/>
			<Tab.Screen
				name="TripsStack"
				component={TripsStack}
				options={{ tabBarIcon: tripsTabIcon, title: "Trips" }}
			/>

			<Tab.Screen
				name="AccountStack"
				component={ProfileStack}
				options={{ tabBarIcon: profileTabIcon, title: "Account" }}
			/>
		</Tab.Navigator>
	);
};

export default BottomNav;
