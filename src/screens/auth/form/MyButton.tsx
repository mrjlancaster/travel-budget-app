import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ title, ...props }) => {
	return (
		<TouchableOpacity {...props} style={styles.button}>
			<Text style={styles.buttonTitle}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
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

export default MyButton;
