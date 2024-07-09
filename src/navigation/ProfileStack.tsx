import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/editProfile/EditProfileScreen";
import { ProfileStackParamList } from "./types";
import TravelDocumentsScreen from "../screens/travelDocuments";
import CustomHeaderBackButton from "../components/CustomBackButton";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="EditProfile"
				component={EditProfileScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TravelDocuments"
				component={TravelDocumentsScreen}
				options={({ route, navigation }) => ({
					// presentation: "modal",
					headerTitle: "Travel Documents",
					headerLeft: () => (
						<CustomHeaderBackButton navigation={navigation} />
					),
				})}
			/>
			{/* <Stack.Screen name="Notifications" component={Notifications} /> */}
		</Stack.Navigator>
	);
};

export default ProfileStack;
