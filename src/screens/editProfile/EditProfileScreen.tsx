import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { EditProfileProps } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = ({ navigation }: EditProfileProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Text>Edit your information</Text>
				<View style={styles.inputGroup}>
					<TextInput placeholder="First name" style={styles.input} />
					<TextInput placeholder="Last name" style={styles.input} />
					<TextInput placeholder="Email" style={styles.input} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,

		borderWidth: 2,
		paddingHorizontal: 24,
	},
	inputGroup: {
		gap: 20,
	},
	input: {
		height: 44,
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 8,
	},
});

export default EditProfileScreen;
