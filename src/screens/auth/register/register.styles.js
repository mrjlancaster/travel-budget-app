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
	scrollView: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 10,
	},

	title: {
		width: 150,
		fontSize: 34,
		bottom: 50,
		left: 15,
		color: "#575755",
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
	input: {
		marginTop: 8,
	},
	loginLinkText: {
		textAlign: "center",
		fontSize: 17,
		top: 20,
		color: "#575755",
		shadowColor: "#000",
	},
	loginLink: {
		color: "blue",
		fontWeight: "400",
		...shadow(0, 1, 1),
	},
	error: {
		fontSize: 14,
		fontWeight: "300",
	},
});
