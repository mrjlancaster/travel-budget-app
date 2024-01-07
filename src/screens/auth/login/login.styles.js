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
	},
	scrollView: {
		flex: 1,
		justifyContent: "space-evenly",
		paddingHorizontal: 10,
	},
	title: {
		fontSize: 34,
		left: 15,
		color: "#575755",
		...shadow(0.1, 1, 1),

		// fontWeight: "400",
		// position: "absolute",
		// top: "20%",
	},
	form: {
		alignItems: "center",
		width: "100%",
	},
	inputContainer: {
		backgroundBlendMode: "luminosity",
		...shadow(0, 1, 0.4),
	},
	inputLabel: {
		fontSize: 17,
		fontWeight: "600",
		color: "#222",
		left: 12,
		marginTop: 10,
	},
	input: {
		marginBottom: 30,
		// alignSelf: 'center',
		width: "85%",
		padding: 15,
		borderWidth: 1,
		borderRadius: 20,
		// borderColor: "#2196F3",
	},
	registerLinkText: {
		fontSize: 17,
		top: 20,
		color: "#575755",
		shadowColor: "#000",
		// ...shadow(1, 3, 2),
	},
	registerLink: {
		color: "blue",
		fontWeight: "400",
		...shadow(0, 1, 1),
	},
	forgotPasswordButton: {
		alignSelf: "flex-end",
		marginRight: 20,
		bottom: 12,
	},
	inputGroup: {
		width: "100%",
		// borderWidth: 1,
		marginBottom: 25,
	},
	forgotPasswordText: {
		fontSize: 16,
		color: "#575755",
		// color: "blue",
		fontWeight: "500",
		// ...shadow(0.2, 1, 1),
	},
	error: {
		fontSize: 14,
		fontWeight: "300",
	},
});
