import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
	name: string;
	label: string;
	value: string;
	placeholder: string;
	handleEndEditing: (e: any) => void;
	onchange: (text: string, name: string) => void;
}>;

const InputGroup = ({
	name,
	label,
	value,
	placeholder,
	onchange,
	handleEndEditing,
	children,
}: Props) => {
	return (
		<View style={styles.inputGroup}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputWrapper}>
				{children}
				<TextInput
					onEndEditing={handleEndEditing}
					style={styles.input}
					placeholderTextColor="gray"
					placeholder={placeholder}
					value={value}
					onChangeText={(text) => onchange(text, name)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	label: {
		// fontWeight: "500",
		opacity: 0.8,
		fontSize: 16,
		left: 10,
	},
	inputGroup: {
		gap: 10,
		marginTop: 20,
	},

	inputWrapper: {
		fontSize: 16,
		borderWidth: 1,
		// borderColor: '#d3d3d3',
		borderColor: "#E5E4E2",
		paddingHorizontal: 10,
		backgroundColor: "#F2F2F2",
		paddingVertical: 8,
		borderRadius: 4,
		flexDirection: "row",
		gap: 10,
		// marginTop: 20,
	},
	input: {
		fontSize: 16,
	},
});

export default InputGroup;
