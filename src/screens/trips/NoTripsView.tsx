import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	RefreshControl,
} from "react-native";
import React from "react";

type Props = {
	onRefresh: () => void;
	refreshing: boolean;
};

const NoTripsView = ({ onRefresh, refreshing }: Props) => {
	return (
		<ScrollView
			contentContainerStyle={styles.noTripsViewContainer}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={20}
				/>
			}
		>
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
		// justifyContent: "center",
		gap: 40,
		alignItems: "center",
	},
	illustration: {
		height: 350,
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
