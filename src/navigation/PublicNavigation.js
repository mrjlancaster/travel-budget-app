import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import RegisterScreen from '../screens/auth/register/RegisterScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';

const Stack = createNativeStackNavigator();

const PublicStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
			<Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default PublicStack;
