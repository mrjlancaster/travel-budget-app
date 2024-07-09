import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		paddingHorizontal: 20,
		// paddingTop: 20,
	},
	formContainer: {
		flex: 1,
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
		// justifyContent: "flex-end",
	},

	ddInput: {
		backgroundColor: "#F2F2F2",
		borderColor: "#E5E4E2",
		borderWidth: 1,
		borderRadius: 4,
	},
	openContainer: {
		borderWidth: 1,
		borderColor: "#E5E4E2",
		padding: 5,
	},
	ddPlaceholder: {
		fontSize: 17,
	},
	ddLabel: {
		fontSize: 17,
	},
	listItem: {
		fontSize: 17,
	},
});
