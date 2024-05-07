import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import LoginScreen from "../screens/auth/login/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/forgotPassword/ForgotPasswordScreen";
import { selectAuth } from "../features/authSlice";
import { useAppSelector } from "../app/hooks";
import { AuthStackParamList } from "./types";
import ResetPasswordScreen from "../screens/auth/resetPassword/ResetPasswordScreen";
import LandingScreen from "../screens/landing/LandingScreen";
import WhiteScreen from "../screens/WhiteScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
	const { isAuthenticated } = useAppSelector(selectAuth);

	return (
		<Stack.Navigator
			initialRouteName="Landing"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Landing" component={LandingScreen} />
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					animationTypeForReplace: !isAuthenticated ? "pop" : "push",
				}}
			/>
			<Stack.Screen name="Signup" component={RegisterScreen} />
			<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
			<Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
			<Stack.Screen name="Lock" component={WhiteScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
