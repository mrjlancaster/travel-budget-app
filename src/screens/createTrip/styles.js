import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		paddingHorizontal: 20,
		// paddingTop: 20,
	},
	screenTitle: {
		marginVertical: 20,
		paddingHorizontal: 20,
		fontWeight: "bold",
		fontSize: 24,
	},
	label: {
		fontWeight: "500",
		opacity: 0.8,
		fontSize: 16,
		left: 10,
	},
	inputGroup: {
		gap: 10,
		marginTop: 20,
	},

	dateInputWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	submitButtonWrapper: {
		marginTop: 20,
	},
});
