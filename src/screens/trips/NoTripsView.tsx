import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

const NoTripsView = () => {
	return (
		<ScrollView contentContainerStyle={styles.noTripsViewContainer}>
			<Image
				source={require("../../assets/notrips.png")}
				style={styles.illustration}
			/>
			<View style={styles.textWrapper}>
				<Text style={styles.noTripsText}>No trips yet!</Text>
				<Text style={styles.noTripsHelperText}>
					Looks like you got some planning to do!
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	noTripsViewContainer: {
		height: "100%",
		// justifyContent: "center",
		gap: 40,
		alignItems: "center",
	},
	illustration: {
		maxHeight: 350,
		maxWidth: 350,
		marginTop: 40,
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
	textWrapper: {
		alignItems: "center",
	},
});

export default NoTripsView;
