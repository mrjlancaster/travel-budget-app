import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE } from '../constants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={LoginScreen} />
			<Stack.Screen name="" component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default AppStack;
