import React, { useState, useMemo, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { CalendarList } from "react-native-calendars";
import CustomButton from "../../components/buttons/CustomButton";
import { HomeStackProps } from "../../navigation/types";

// {
// 	"2024-01-09": {
// 		selected: true,
// 		marked: true,
// 		// selectedColor: "blue",
// 	},
// 	"2024-01-09": {
// 		selected: true,
// 		marked: true,
// 		// selectedColor: "blue",
// 	},
// 	"2024-01-09": {
// 		selected: true,
// 		marked: true,
// 		// selectedColor: "blue",
// 	},
// }

const DatePickerModal = ({ navigation }: HomeStackProps) => {
	const [date, setDate] = useState(new Date());
	const [selectedDates, setSelectedDates] = useState({});

	// const markedDates = useMemo(() => {
	// 	return { [date]: { selected: true } };
	// }, [date]);

	const handleChange = (selected) => {
		console.log(selected);
		let selectedDate = selected.dateString;
		let newDates = selectedDates;

		if (selectedDates[selectedDate]) {
			delete newDates[selectedDate];
		} else {
			newDates[selectedDate] = {
				selected: true,
				startingDay: true,
				endingDay: true,
				disableTouchEvent: true,
			};

			setSelectedDates({ ...newDates });
		}
	};

	// const onDayPress = useCallback(
	// 	(day) => {
	// 		console.warn("dayPress: ", day);
	// 		setDate(day.dateString);
	// 	},
	// 	[setDate]
	// );

	console.error("Selected dates", selectedDates);

	const handlePress = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={{ flex: 1 }}>
				<CalendarList
					onDayPress={handleChange}
					pastScrollRange={10}
					futureScrollRange={15}
					markedDates={selectedDates}
					// current="2024-01-08"
					// markedDates={{
					// 	"2024-01-09": {
					// 		selected: true,
					// 		// marked: true,
					// 		// selectedColor: "blue",
					// 	},
					// 	"2024-01-10": { marked: true },
					// 	"2024-01-11": {
					// 		selected: true,
					// 		marked: true,
					// 		// selectedColor: "blue",
					// 	},
					// }}
					theme={{
						textMonthFontSize: 24,
					}}
				/>
			</View>

			<CustomButton onPress={handlePress} title="Select dates" />
		</SafeAreaView>
	);
};

export default DatePickerModal;
