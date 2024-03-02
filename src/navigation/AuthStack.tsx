import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import LoginScreen from "../screens/auth/login/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/forgotPassword/ForgotPasswordScreen";
import { selectAuth } from "../features/authSlice";
import { useAppSelector } from "../hooks";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	const { isAuthenticated } = useAppSelector(selectAuth);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					animationTypeForReplace: !isAuthenticated ? "pop" : "push",
				}}
			/>
			<Stack.Screen name="Register" component={RegisterScreen} />
			<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
