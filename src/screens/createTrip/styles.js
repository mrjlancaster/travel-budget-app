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
		fontSize: 18,
		fontWeight: "400",
		marginLeft: 10,
	},
	textInput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	dateInput: {
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});
