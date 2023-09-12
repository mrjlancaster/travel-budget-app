import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TripsScreen from "../screens/trips/TripsScreen";
import TripDetailScreen from "../screens/tripDetails/TripDetailScreen";

const Stack = createNativeStackNavigator();

const TripsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AllTrips" component={TripsScreen} />
      <Stack.Screen name="TripDetails" component={TripDetailScreen} />
    </Stack.Navigator>
  );
};

export default TripsStack;
