import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const NoTrips = () => {
	return (
		<View style={styles.noTripsViewContainer}>
			<Text style={styles.noTripsText}>No upcoming trips</Text>
			<Text style={styles.noTripsHelperText}>
				Looks like you got some planning to do!
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	noTripsViewContainer: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	noTripsText: {
		fontSize: 26,
		fontWeight: "500",
		color: "#17202A",
	},
	noTripsHelperText: {
		marginTop: 10,
		fontSize: 17,
		color: "#36454F",
	},
});

export default NoTrips;
