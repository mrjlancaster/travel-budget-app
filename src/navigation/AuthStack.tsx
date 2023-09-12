import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import LoginScreen from "../screens/auth/login/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/forgotPassword/ForgotPasswordScreen";
import { selectUser } from "../features/authSlice";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	const user = useSelector(selectUser);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					animationTypeForReplace: !user.isAuthenticated ? "pop" : "push",
				}}
			/>
			<Stack.Screen name="Register" component={RegisterScreen} />
			<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
