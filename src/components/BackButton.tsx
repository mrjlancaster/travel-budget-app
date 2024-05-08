import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	handleNavigation: () => void;
};

const BackButton = ({ handleNavigation }: Props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={handleNavigation}>
			<Icon name="chevron-back" size={24} color={"#1B1E28"} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		top: 5,
		left: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F7F7F9",
		borderRadius: 50,
		height: 44,
		width: 44,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2.62,
		elevation: 3,
	},
});

export default BackButton;
