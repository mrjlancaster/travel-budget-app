import React, { useState } from "react";
import {
	Dimensions,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
	Platform.OS === "ios" ? Dimensions.get("window").height : null;

type Props = {
	isVisible: boolean;
	close: () => void;
};

const AddTsaModal = ({ isVisible, close }: Props) => {
	const [input, onChangeText] = useState("");
	const handleSave = async () => {};

	return (
		<View
			style={{
				flex: 1,
				position: "absolute",
				top: 0,
				left: 0,
			}}
		>
			<Modal
				isVisible={isVisible}
				onBackdropPress={close}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
			>
				<View style={styles.content}>
					<Text style={styles.title}>Enter your TSA number:</Text>
					<View style={styles.form}>
						<TextInput
							style={styles.input}
							placeholder="Tsa precheck number"
							value={input}
							autoCapitalize="none"
							returnKeyLabel="Done"
							returnKeyType="done"
							onChangeText={(text) => onChangeText(text)}
						/>
						<TouchableOpacity style={styles.button} onPress={handleSave}>
							<Text style={styles.buttonText}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		backgroundColor: "#fff",
		height: 240,
		borderRadius: 12,
		padding: 20,
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: 18,
		top: 20,
		fontWeight: "500",
	},
	form: {
		width: "100%",

		alignItems: "center",
		gap: 20,
		bottom: 30,
	},
	input: {
		borderWidth: 1,
		borderColor: "#F1F1F1",
		padding: 10,
		borderRadius: 5,
		width: "75%",
	},
	button: {
		backgroundColor: "#17202A",
		width: "75%",
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

export default AddTsaModal;
