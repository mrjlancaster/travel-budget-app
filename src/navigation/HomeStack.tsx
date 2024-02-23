import { Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import TripDetailScreen from "../screens/tripDetails/TripDetailScreen";
import { HomeStackParamList } from "./types";
import CreateTripScreen from "../screens/createTrip/CreateTripScreen";
import DatePickerModal from "../screens/createTrip/DatepickerModal";
import CustomHeaderBackButton from "../components/CustomBackButton";
import SearchModal from "../components/searchModal/SearchModal";
import CustomHeader from "../screens/tripDetails/CustomHeader";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TripDetails"
				component={TripDetailScreen}
				options={{
					header: () => <CustomHeader />,
				}}
			/>
			<Stack.Screen
				name="SearchModal"
				component={SearchModal}
				options={({ route, navigation }) => ({
					presentation: "modal",
					headerTitle: "Destination",
					headerLeft: () => (
						<CustomHeaderBackButton navigation={navigation} />
					),
				})}
			/>

			<Stack.Group
				screenOptions={({ route, navigation }) => ({
					presentation: "fullScreenModal",
					headerLeft: () => (
						<CustomHeaderBackButton navigation={navigation} />
					),
				})}
			>
				<Stack.Screen
					name="NewTrip"
					component={CreateTripScreen}
					options={{
						headerTitle: "New Trip",
						headerStyle: {
							// backgroundColor: "#000",
						},

						headerTitleStyle: { fontSize: 24 },
					}}
				/>
				<Stack.Screen
					name="DatePickerModal"
					component={DatePickerModal}
					options={{ headerTitle: "Choose Dates" }}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default HomeStack;
