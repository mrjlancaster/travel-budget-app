import { StyleSheet } from "react-native";

const shadow = (opac, w, h) => {
	return {
		shadowOpacity: opac,
		shadowOffset: {
			width: w,
			height: h,
		},
	};
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollView: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 24,
	},

	title: {
		width: 150,
		fontSize: 28,
		bottom: 50,
		left: 15,
		// bottom: 80,
		fontWeight: "600",
		color: "#1B1E28",
		...shadow(0.1, 1, 1),
	},
	form: {
		width: "100%",
	},
	inputLabel: {
		fontSize: 17,
		fontWeight: "600",
		color: "#222",
		left: 12,
		marginTop: 10,
	},
	loginLinkText: {
		// marginTop: 50,
		top: 50,
		textAlign: "center",
		fontSize: 17,
		// top: 20,
		color: "#575755",
		shadowColor: "#000",
	},
	loginLink: {
		color: "#0F68EC",
	},
	error: {
		fontSize: 14,
		fontWeight: "300",
	},
});
