import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
	title: string;
	onPress: () => void;
};

const CustomButton = ({ onPress, title }: Props) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		elevation: 8,
		backgroundColor: "#007bff",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 12,
		// width: "93%",
		width: "100%",
		alignSelf: "center",
	},
	buttonText: {
		fontSize: 17,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});

export default CustomButton;
