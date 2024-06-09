import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import React, { useState } from "react";
import MyInput from "../form/MyInput";
import BackButton from "../../../components/BackButton";
import { ForgotPasswordProps } from "../../../navigation/types";
import MyModal from "./Modal";
import { Button } from "@rneui/themed";
import { useResetPasswordMutation } from "../../../services/api/authApi";

export default function ForgotPasswordScreen({
	navigation,
}: ForgotPasswordProps) {
	const [email, setEmail] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

	const handlePasswordReset = async () => {
		try {
			const res = await resetPassword(email).unwrap();
			console.log("RESET PASSWORD RESPONSE", res);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
			keyboardVerticalOffset={-180}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
					<MyModal isOpen={isModalOpen} />
					<View style={styles.scrollView}>
						<BackButton handleNavigation={() => navigation.goBack()} />

						<View style={styles.textWrapper}>
							<Text style={styles.title}>Forgot Password</Text>
							<Text style={styles.text}>
								Enter the email you use for your account
							</Text>
						</View>
						<View style={styles.formWrapper}>
							<MyInput
								placeholder="Enter your email"
								value={email}
								autoCapitalize="none"
								onChangeText={(text) => setEmail(text)}
							/>
							<Button
								onPress={handlePasswordReset}
								size="lg"
								color="#3B71F3"
								loading={isLoading}
								radius="md"
							>
								Reset Password
							</Button>
						</View>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 24,
		gap: 80,
	},
	textWrapper: {
		// flex: 1,
		gap: 20,
		alignItems: "center",
	},
	title: {
		fontSize: 28,
	},
	text: {
		fontSize: 17,
		color: "#7D848D",
	},
	formWrapper: {
		gap: 10,
	},
});
