import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
	openModal: () => void;
};

const TsaPrecheckCard = ({ openModal }: Props) => {
	return (
		<View style={styles.card}>
			<Text style={styles.title}>TSA PreCheck</Text>

			<Text style={styles.desc}>
				Having your KTN number with you makes travel easy. Remember, you
				won't need to remove your shoes or belt or jackets!
			</Text>

			<TouchableOpacity style={styles.button} onPress={openModal}>
				<Text style={styles.buttonText}>Add My TSA</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		backgroundColor: "#fff",
		padding: 20,
		// height: 140,
		shadowColor: "#000",
		shadowOpacity: 0.16,
		borderRadius: 12,
		elevation: 2,
		shadowRadius: 4,
		gap: 20,
		shadowOffset: {
			height: 2,
			width: 2,
		},
	},
	title: {
		fontSize: 18,
		color: "#404852",
		fontWeight: "500",
	},
	desc: {
		fontSize: 15,
		textAlign: "center",
	},
	button: {
		backgroundColor: "#17202A",
		width: "80%",
		padding: 8,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		fontWeight: "500",
		color: "#fff",
		fontSize: 15,
	},
});

export default TsaPrecheckCard;
