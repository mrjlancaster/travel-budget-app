import React, { useState } from "react";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	View,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Text,
} from "react-native";
import { styles } from "./register.styles";
import { setCredentials } from "../../../features/authSlice";
import { Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import { RegisterProps } from "../../../navigation/types";
import { useRegisterMutation } from "../../../services/api/authApi";
import MyInput from "../form/MyInput";
import BackButton from "../../../components/BackButton";
import { useAppDispatch } from "../../../app/hooks";

type ValuesProps = {
	email?: string;
	password?: string;
	confirmPassword?: string;
};

function validate(values: ValuesProps) {
	const errors: ValuesProps = {};

	if (!values.email && !values.password && !values.confirmPassword) {
		errors.email = "Email is required";
		errors.password = "Password is required";
		errors.confirmPassword = "Confirm password is required";

		return errors;
	}

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Password is required";
	}

	if (values.password !== values.confirmPassword) {
		errors.confirmPassword = "Password must match.";
	}

	return errors;
}

const RegisterScreen = ({ navigation }: RegisterProps) => {
	const [register, { isLoading }] = useRegisterMutation();
	const dispatch = useAppDispatch();
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const [formState, setFormState] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSignup = async (values: ValuesProps) => {
		try {
			const data = await register(values).unwrap();
			console.log("response", data);

			if (data.success == 1) {
				dispatch(setCredentials(data.data));
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
			keyboardVerticalOffset={-150}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView style={styles.container}>
					<View style={styles.scrollView}>
						<BackButton handleNavigation={() => navigation.popToTop()} />
						<Text style={styles.title}>Create Account</Text>
						<Formik
							// validateOnBlur
							initialValues={formState}
							validate={validate}
							onSubmit={(values) => handleSignup(values)}
						>
							{({
								handleChange,
								handleBlur,
								handleSubmit,
								values,
								errors,
								isSubmitting,
							}) => (
								<>
									<View style={styles.form}>
										{/* <Text style={styles.inputLabel}>
											Email Address
										</Text> */}
										<MyInput
											autoCapitalize="none"
											// containerStyle={styles.input}
											// labelStyle={styles.inputLabel}
											// ref={dateInputRef}
											placeholder="Your email"
											keyboardType="email-address"
											onChangeText={handleChange("email")}
											onBlur={handleBlur("email")}
											value={values.email}
											// errorMessage={errors.email}
											onSubmitEditing={handleSignup}
											// errorStyle={styles.error}
											returnKeyLabel="Done"
											returnKeyType="done"
										/>

										<MyInput
											labelStyle={styles.inputLabel}
											containerStyle={styles.input}
											// ref={dateInputRef}
											placeholder="Password"
											onChangeText={handleChange("password")}
											onBlur={handleBlur("password")}
											secureTextEntry={!isPasswordShown}
											value={values.password}
											// errorMessage={errors.password}
											// errorStyle={styles.error}
											onSubmitEditing={handleSignup}
										/>

										{/* <Text style={styles.inputLabel}>
										Confirm Your Password
									</Text> */}

										<MyInput
											// ref={dateInputRef}
											placeholder="Confirm password"
											secureTextEntry={true}
											onChangeText={handleChange("confirmPassword")}
											onBlur={handleBlur("confirmPassword")}
											value={values.confirmPassword}
											// errorMessage={errors.confirmPassword}
											// errorStyle={styles.error}
											returnKeyLabel="Done"
											returnKeyType="done"
										/>

										<Button
											containerStyle={{
												width: "100%",
												marginTop: 10,
											}}
											onPress={handleSubmit}
											size="lg"
											loading={isLoading}
											color="#3B71F3"
											radius="md"
										>
											Sign Up
										</Button>
									</View>
								</>
							)}
						</Formik>
						<Text style={styles.loginLinkText}>
							Already have an account?{" "}
							<Link style={styles.loginLink} to={{ screen: "Login" }}>
								Login
							</Link>
						</Text>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;
