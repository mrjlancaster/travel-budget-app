import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React from "react";

const TravelDocumentsScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.container}>
				<View style={styles.group}>
					<View style={styles.titleWrapper}>
						<Text style={styles.groupTitle}>Known Traveler Number</Text>
						<Text style={styles.helperText}>(TSA PreCheck)</Text>
					</View>
					<TouchableOpacity>
						<Text style={styles.addButtonLabel}>Add</Text>
						{/* <Text>TT02GS23</Text> */}
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		marginTop: 30,
	},
	group: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	titleWrapper: {
		width: 140,
	},
	groupTitle: {
		fontSize: 18,
	},
	addButtonLabel: {
		color: "blue",
		fontSize: 17,
	},
});

export default TravelDocumentsScreen;
