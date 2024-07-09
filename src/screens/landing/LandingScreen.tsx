import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import BACKGROUND_IMAGE from "../../../assets/background.jpg";
import { LandingProps } from "../../navigation/types";
import { Button } from "@rneui/themed";
import AppButton from "../../components/buttons/AppButton";

const LandingScreen = ({ navigation }: LandingProps) => {
	return (
		<ImageBackground
			source={BACKGROUND_IMAGE}
			resizeMode="cover"
			style={{ flex: 1, justifyContent: "center" }}
		>
			<SafeAreaView style={{ flex: 1, alignItems: "center" }}>
				<View style={styles.buttonGroup}>
					<Button
						containerStyle={styles.button}
						onPress={() => navigation.navigate("Login")}
						size="lg"
						// color="#3B71F3"
						color="#0F52BA"
						radius="lg"
					>
						Login
					</Button>

					<Button
						containerStyle={styles.button}
						onPress={() => navigation.navigate("Signup")}
						size="lg"
						// color="#3B71F3"
						color="#0F52BA"
						radius="lg"
					>
						Sign Up
					</Button>
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
		gap: 30,
	},
	button: {
		top: "70%",
		// backgroundColor: "#0F68EC",
		// borderRadius: 12,
		// paddingVertical: 17,
		width: "100%",
		// justifyContent: "center",
		// alignItems: "center",

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
		fontWeight: "600",
		color: "#fff",
	},
});

export default LandingScreen;
