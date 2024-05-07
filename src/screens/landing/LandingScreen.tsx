import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	SafeAreaView,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import BACKGROUND_IMAGE from "../../../assets/background.jpg";
import { LandingProps } from "../../navigation/types";

const LandingScreen = ({ navigation }: LandingProps) => {
	return (
		<ImageBackground
			source={BACKGROUND_IMAGE}
			resizeMode="cover"
			style={{ flex: 1, justifyContent: "center" }}
		>
			<SafeAreaView style={{ flex: 1, alignItems: "center" }}>
				<View style={styles.buttonGroup}>
					<TouchableOpacity
						containerStyle={styles.button}
						onPress={() => navigation.navigate("Login")}
					>
						<Text style={styles.buttonTitle}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						containerStyle={styles.button}
						onPress={() => navigation.navigate("Signup")}
					>
						<Text style={styles.buttonTitle}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	buttonGroup: {
		paddingHorizontal: 24,
		flex: 1,
		width: "100%",
		alignItems: "center",

		gap: 20,
	},
	button: {
		top: "70%",
		backgroundColor: "#0F68EC",
		borderRadius: 12,
		paddingVertical: 17,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2.62,
		elevation: 3,
	},
	buttonTitle: {
		fontSize: 17,
		fontWeight: "500",
		color: "#fff",
	},
});

export default LandingScreen;
