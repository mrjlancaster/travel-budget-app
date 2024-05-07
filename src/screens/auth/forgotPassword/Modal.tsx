import { Modal, View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
	isOpen: boolean;
};

const MyModal = ({ isOpen }: Props) => {
	return (
		<View
			style={{
				position: "absolute",
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: 22,
			}}
		>
			<Modal
				animationType="fade"
				transparent={true}
				visible={isOpen}
				onRequestClose={() => {
					// Alert.alert("Modal has been closed.");
					// setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.iconContainer}>
							<Icon name="email-outline" size={22} color="#fff" />
						</View>
						<Text style={styles.title}>Check your email</Text>
						<Text style={styles.modalText}>
							We have sent you instructions to your email
						</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
	},
	title: {
		fontSize: 21,
		fontWeight: "500",
		marginTop: 20,
	},
	modalText: {
		color: "#7D848D",
		marginTop: 10,
		textAlign: "center",
		fontSize: 17,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	iconContainer: {
		backgroundColor: "#0F68EC",
		height: 44,
		width: 44,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
});

export default MyModal;
