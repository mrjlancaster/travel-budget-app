import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Root from "./src/navigation";
import SInfo from "react-native-sensitive-info";

async function checkDeviceSensors() {
	// To check if any sensor is available on iOS/Android
	const hasAnySensors = await SInfo.isSensorAvailable();

	// on Android you can check if has any fingersprints enrolled
	const hasAnyFingerprintsEnrolled = await SInfo.hasEnrolledFingerprints();

	const savingFirstData = await SInfo.setItem("sensor", hasAnySensors, {});
}

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === "dark";

	// const backgroundStyle = {
	//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	// };

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<StatusBar
						barStyle={isDarkMode ? "light-content" : "dark-content"}
						// backgroundColor={backgroundStyle.backgroundColor}
					/>
					<Root />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}

export default App;
