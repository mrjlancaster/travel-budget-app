import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	screenTitle: {},

	listContainer: {
		marginTop: 30,
	},
	item: {
		marginTop: 15,
		paddingHorizontal: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
	screenTitle: {
		marginVertical: 20,
		paddingHorizontal: 24,
		fontWeight: "500",
		fontSize: 27,
	},
	image: {
		height: 140,
		width: "100%",
	},
});
