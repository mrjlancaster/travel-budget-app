import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { EditProfileProps } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
import MyInput from "../../components/form/MyInput";

const EditProfileScreen = ({ navigation }: EditProfileProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Text style={styles.title}>Edit your information</Text>
				<View style={styles.inputGroup}>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>First Name</Text>
						<MyInput />
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Last Name</Text>
						<MyInput />
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Email</Text>
						<MyInput />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollView: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 24,
	},
	title: {
		position: "absolute",
		top: 20,
		fontSize: 21,
		fontWeight: "500",
	},
	inputGroup: {
		width: "100%",
	},
	inputWrapper: {
		gap: 10,
	},
	label: {
		left: 5,
		fontSize: 16,
		fontWeight: "500",
	},
});

export default EditProfileScreen;
