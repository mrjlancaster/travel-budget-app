import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const MyInput = ({ ...props }) => {
	return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
	input: {
		marginBottom: 30,
		height: 50,
		backgroundColor: "#F7F7F9",
		// width: "90%",
		padding: 15,
		fontSize: 17,
		fontWeight: "500",
		borderRadius: 10,

		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.1,
		// shadowRadius: 2.62,
		// elevation: 3,
	},
});

export default MyInput;
