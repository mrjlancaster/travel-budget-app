import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const NoTripsView = () => {
	return (
		<ScrollView contentContainerStyle={styles.noTripsViewContainer}>
			<Text style={styles.noTripsText}>No trips yet!</Text>
			<Text style={styles.noTripsHelperText}>
				Looks like you got some planning to do!
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	noTripsViewContainer: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	noTripsText: {
		fontSize: 26,
		fontWeight: "500",
	},
	noTripsHelperText: {
		marginTop: 10,
		fontSize: 17,
		color: "#36454F",
	},
});

export default NoTripsView;
