import React, { useState, useMemo, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { CalendarList, DateData } from "react-native-calendars";
import CustomButton from "../../components/buttons/CustomButton";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";

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

const DEFAULT_SELECTED_COLOR = "#00BBF2";

const DatePickerModal = ({ navigation }: HomeStackProps) => {
	const [markingType, setMarkingType] = useState(undefined);
	const [startingDate, setStartingDate] = useState(
		moment().format("YYYY-MM-DD")
	);
	const [endingDate, setEndingDate] = useState("");

	const [selectedDates, setSelectedDates] = useState({
		[moment().format("YYYY-MM-DD")]: {
			selected: true,
			// color: DEFAULT_SELECTED_COLOR,
			// startingDay: true,
			// endingDay: true,
			// color: "#007bff",
			// textColor: "#fff",
		},
	});

	const startingDayObj = {
		startingDay: true,
		color: DEFAULT_SELECTED_COLOR,
		textColor: "#fff",
	};

	const handleChange = (selected: DateData) => {
		const { dateString } = selected;
		const datesInBetween: any = [];
		const dates = {};
		let startDate, endDate;

		if (moment(dateString).isBefore(startingDate)) {
			console.error("date is before");

			dates[dateString] = {
				selected: true,
				color: DEFAULT_SELECTED_COLOR,
			};

			setMarkingType(undefined);
			setSelectedDates(dates);
		}

		// if (startingDate === "") {
		// 	setMarkingType(undefined);
		// 	setStartingDate(dateString);
		// } else if (startingDate !== "" && endingDate === "") {
		// 	endDate = dateString;
		// 	setMarkingType("period");
		// 	setEndingDate(endDate);
		// } else if (
		// 	startingDate !== "" &&
		// 	endingDate !== "" &&
		// 	moment(dateString).isAfter(endingDate)
		// ) {
		// 	endDate = dateString;
		// 	setEndingDate(endDate);
		// }

		// if (
		// 	startingDate !== "" &&
		// 	endingDate !== "" &&
		// 	moment(dateString).isBefore(endingDate)
		// ) {
		// 	startDate = dateString;

		// 	setMarkingType(undefined);
		// 	setStartingDate(startDate);
		// }

		// while (moment(startDate) < moment(endDate)) {
		// 	const d = moment(startDate).add(1, "days").format("YYYY-MM-DD");
		// 	datesInBetween.push(d);
		// 	// startDate = moment(startDate).add(1, 'days').format("YYYY-MM-DD");
		// }

		console.log("Dates in between => ", datesInBetween);

		// if (selectedDates[selectedDate]) {
		// 	const newDate = {
		// 		[selected.dateString]: {
		// 			selected: true,
		// 			color: DEFAULT_SELECTED_COLOR,
		// 		},
		// 	};

		// 	setMarkingType(undefined);
		// 	setSelectedDates(newDate);
		// } else {
		// 	// const newDates[selected.dateString] = {}
		// 	newDates[selectedDate] = {
		// 		selected: true,
		// 		startingDay: true,
		// 		endingDay: true,
		// 		disableTouchEvent: true,
		// 	};

		// 	setSelectedDates({ ...newDates });
		// }
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
					futureScrollRange={10}
					// markingType="period"

					markingType={markingType}
					markedDates={selectedDates}
					// markedDates={{
					// 	"2024-01-11": {
					// 		startingDay: true,
					// 		color: "#007bff",
					// 		textColor: "#fff",
					// 	},
					// 	"2024-01-12": { color: "#007bff", textColor: "#fff" },
					// 	"2024-01-13": { color: "#007bff", textColor: "#fff" },
					// 	"2024-01-14": { color: "#007bff", textColor: "#fff" },
					// 	"2024-01-15": {
					// 		endingDay: true,
					// 		color: "#007bff",
					// 		textColor: "#fff",
					// 	},
					// }}
					theme={{
						textMonthFontSize: 22,
					}}
				/>
			</View>

			<CustomButton onPress={handlePress} title="Select dates" />
		</SafeAreaView>
	);
};

export default DatePickerModal;
