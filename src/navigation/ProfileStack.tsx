import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/editProfile/EditProfileScreen";
import { ProfileStackParamList } from "./types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
			<Stack.Screen name="EditProfile" component={EditProfileScreen} />
			{/* <Stack.Screen name="Notifications" component={Notifications} /> */}
		</Stack.Navigator>
	);
};

export default ProfileStack;
