import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNewTrip from "../screens/createTrip/CreateTripScreen";
import HomeScreen from "../screens/home/HomeScreen";
import TripDetailScreen from "../screens/tripDetails/TripDetailScreen";
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="TripDetails" component={TripDetailScreen} />
			<Stack.Screen
				name="NewTrip"
				component={CreateNewTrip}
				options={{
					presentation: "modal",
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
