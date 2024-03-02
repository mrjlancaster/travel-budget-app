import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const CalendarIcon = () => (
	<Icon name="calendar-range-outline" type="material-community" />
);

type Props = {
	label: string;
	date: string;
	fieldName: string;
};

const DateButton = ({ label, date, fieldName }: Props) => {
	const navigation = useNavigation();

	return (
		<View style={styles.group}>
			<Text style={styles.label}>{label}</Text>
			<Pressable
				onPress={() =>
					navigation.navigate("DatePickerModal", { fieldName })
				}
				style={({ pressed }) => [
					styles.button,
					pressed && { opacity: 0.8 },
				]}
			>
				<CalendarIcon />
				<Text>{date}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	group: {
		justifyContent: "center",
		width: "48%",
		gap: 8,
	},
	label: {
		// fontWeight: "500",
		opacity: 0.8,
		fontSize: 16,
		left: 10,
	},
	button: {
		width: "100%",
		borderWidth: 1,
		// borderColor: '#d3d3d3',
		borderColor: "#E5E4E2",
		paddingHorizontal: 10,
		backgroundColor: "#F2F2F2",
		paddingVertical: 8,
		// width: "48%",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		flexDirection: "row",
		borderRadius: 4,
	},
});

export default DateButton;
