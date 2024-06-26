import React, { useEffect, useState } from "react";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	View,
	Keyboard,
	Platform,
	TouchableOpacity,
	Text,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Alert,
	TextInput,
} from "react-native";
import { styles } from "./login.styles";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/authSlice";
import { Formik } from "formik";
import { Button } from "@rneui/themed";
import { LoginProps } from "../../../navigation/types";
import { useLoginMutation } from "../../../services/api/authApi";
import BackButton from "../../../components/BackButton";
import MyInput from "../form/MyInput";

type ValuesProp = {
	email?: string;
	password?: string;
};

function validate(values: ValuesProp) {
	const errors: ValuesProp = {};

	if (!values.email && !values.password) {
		errors.email = "Email is required";
		errors.password = "Password is required";

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

	return errors;
}

const LoginScreen = ({ navigation }: LoginProps) => {
	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();
	const initialLoginValues = { email: "", password: "" };
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const handleLogin = async (values: ValuesProp, actions) => {
		try {
			const response = await login(values).unwrap();
			console.error("Login Response => ", response);

			if (response.success === 1) {
				dispatch(setCredentials(response.data));
				actions.resetForm();
			}
		} catch (err: any) {
			console.log(err);
			if (err.response) {
				const { message } = err.response.data;
				Alert.alert("Login Error", message);

				if (message.includes("Password" || "password")) {
					// actions.setErrors({ email: "", password: errorMessage });
					// actions.resetForm();
				}

				if (message.includes("email" || "Email")) {
					// actions.setErrors({ email: errorMessage, password: "" });
				}
			}
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
			keyboardVerticalOffset={-200}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{/* <ScrollView contentContainerStyle={styles.scrollView}> */}
				<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
					<View style={styles.scrollView}>
						<BackButton handleNavigation={() => navigation.popToTop()} />
						<Text style={styles.title}>Welcome back!</Text>

						<Formik
							// validateOnBlur={true}
							initialValues={initialLoginValues}
							validate={validate}
							onSubmit={(values, actions) =>
								handleLogin(values, actions)
							}
						>
							{({
								handleChange,
								handleBlur,
								handleSubmit,
								values,
								errors,
							}) => (
								<>
									<View style={styles.form}>
										<View style={styles.inputGroup}>
											{/* <Text style={styles.inputLabel}>
											Email Address
										</Text> */}
											<MyInput
												autoCapitalize="none"
												keyboardType="email-address"
												// errorMessage={errors.email}
												// ref={emailRef}
												placeholder="Email address"
												// placeholderTextColor="#fff"
												onChangeText={handleChange("email")}
												// errorStyle={styles.error}
												onBlur={handleBlur("email")}
												returnKeyLabel="Done"
												returnKeyType="done"
												value={values.email}
											/>
											{/* <Input
											autoCapitalize="none"
											containerStyle={styles.inputContainer}
											keyboardType="email-address"
											errorMessage={errors.email}
											// ref={emailRef}
											placeholder="Email address"
											// placeholderTextColor="#fff"
											onChangeText={handleChange("email")}
											errorStyle={styles.error}
											onBlur={handleBlur("email")}
											returnKeyLabel="Done"
											returnKeyType="done"
											value={values.email}
											leftIcon={{
												type: "ionicon",
												name: "person-sharp",
												color: "#575755",
											}}
										/> */}

											{/* <Text style={styles.inputLabel}>Password</Text> */}

											<MyInput
												placeholder="Password"
												secureTextEntry={!isPasswordShown}
												onChangeText={handleChange("password")}
												onBlur={handleBlur("password")}
												value={values.password}
												returnKeyLabel="Done"
												returnKeyType="done"
											/>

											{/* <Input
											containerStyle={styles.inputContainer}
											// labelStyle={styles.inputLabel}
											// containerStyle={styles.input}
											// ref={passwordRef}
											errorMessage={errors.password}
											// ref={dateInputRef}
											placeholder="Password"
											secureTextEntry={!isPasswordShown}
											errorStyle={styles.error}
											onChangeText={handleChange("password")}
											onBlur={handleBlur("password")}
											value={values.password}
											returnKeyLabel="Done"
											returnKeyType="done"
											leftIcon={{
												type: "material",
												name: "lock",
												color: "#575755",
											}}
											rightIcon={{
												onPress: () =>
													setIsPasswordShown(!isPasswordShown),
												type: "ionicon",
												name: isPasswordShown ? "eye-off" : "eye",
												color: "#575755",
											}}
										/> */}

											<TouchableOpacity
												style={styles.forgotPasswordButton}
												onPress={() =>
													navigation.navigate("ForgotPassword")
												}
											>
												<Text style={styles.forgotPasswordText}>
													Forgot password?
												</Text>
											</TouchableOpacity>
										</View>
										<Button
											color="#3B71F3"
											containerStyle={{
												width: "100%",
												marginTop: 10,
											}}
											onPress={handleSubmit}
											size="lg"
											loading={isLoading}
											radius="md"
										>
											Login
										</Button>
										<Text style={styles.registerLinkText}>
											Don't have an account?{" "}
											<Link
												style={styles.registerLink}
												to={{ screen: "Signup" }}
											>
												Sign up
											</Link>
										</Text>
									</View>
								</>
							)}
						</Formik>
						{/* </ScrollView> */}
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
