import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
	title: string;
	onPress: () => void;
};

const AppButton = ({
	onPress,
	title,
	buttonContainerStyle,
	labelStyle,
}: Props) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, buttonContainerStyle]}
		>
			<Text style={[styles.buttonText, labelStyle]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		elevation: 8,
		backgroundColor: "#17202A",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 12,
		// width: "93%",
		width: "100%",
		alignSelf: "center",

		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	buttonText: {
		fontSize: 17,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});

export default AppButton;
