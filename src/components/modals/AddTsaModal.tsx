import React, { useEffect, useState } from "react";
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
import { useUpdateUserMutation } from "../../services/api/usersApi";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
	Platform.OS === "ios" ? Dimensions.get("window").height : null;

type Props = {
	isVisible: boolean;
	close: () => void;
};

const AddTsaModal = ({ isVisible, close }: Props) => {
	const [input, onChangeText] = useState("");
	const [updateUser, { isLoading }] = useUpdateUserMutation();

	const handleSave = async () => {
		try {
			const res = await updateUser(input).unwrap();
			console.log("TSA PRECHECK SAVE RESPONSE", res);

			if (res.success) {
				onChangeText("");
				close();
			}
		} catch (err) {
			console.log(err);
		}
	};

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
				animationInTiming={400}
				animationOutTiming={400}
				isVisible={isVisible}
				onBackdropPress={close}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
			>
				<View style={styles.content}>
					<Text style={styles.title}>Enter your KTN</Text>
					<View style={styles.form}>
						<TextInput
							style={styles.input}
							placeholder="Known Traveler Number"
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
		fontSize: 24,
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
		backgroundColor: "#F1F1F1",
		borderRadius: 5,
		fontSize: 15,
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
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default AddTsaModal;
