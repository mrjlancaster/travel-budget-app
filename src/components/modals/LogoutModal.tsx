import React from "react";
import {
	Dimensions,
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/authSlice";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
	Platform.OS === "ios" ? Dimensions.get("window").height : null;

type Props = {
	isVisible: boolean;
	close: () => void;
};

const LogoutModal = ({ isVisible, close }: Props) => {
	const dispatch = useAppDispatch();

	return (
		<View
			style={{
				flex: 1,
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
		>
			<Modal
				// animationIn="fadeIn"
				animationInTiming={400}
				animationOutTiming={400}
				isVisible={isVisible}
				onBackdropPress={close}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
			>
				<View style={styles.content}>
					<View style={styles.titleWrapper}>
						<Icon name="logout" size={50} />
						<Text style={styles.title}>
							Oh no! you're leaving...Are you sure?
						</Text>
					</View>
					<View style={styles.buttonGroup}>
						<TouchableOpacity
							style={styles.containedButton}
							onPress={close}
						>
							<Text style={styles.containedBtnText}>
								No, keep me here
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.outlinedButton}
							onPress={() => dispatch(logout())}
						>
							<Text style={styles.outlinedBtnText}>Yes, log me out</Text>
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
		borderRadius: 12,
		paddingVertical: 30,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
		gap: 50,
	},
	titleWrapper: {
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		top: 20,
		fontWeight: "500",
	},
	buttonGroup: {
		width: "100%",
		gap: 20,
	},
	containedButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "red",
	},
	outlinedButton: {
		padding: 10,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "red",
	},
	containedBtnText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "600",
		fontSize: 16,
	},
	outlinedBtnText: {
		color: "red",
		textAlign: "center",
		fontWeight: "600",
		fontSize: 16,
	},
});

export default LogoutModal;
