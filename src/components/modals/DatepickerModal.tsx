import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import CustomButton from "../../components/buttons/CustomButton";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import { addNewTrip } from "../../features/tripsSlice";
import { useAppDispatch } from "../../hooks";

const DEFAULT_SELECTED_COLOR = "#00BBF2";

const INITIAL_STATE = {
	[moment().format("YYYY-MM-DD")]: { selected: true },
};

const DatepickerModal = ({ navigation, route }: HomeStackProps) => {
	const [state, setState] = useState(INITIAL_STATE);
	const [selectedDate, setSelectedDate] = useState(null);
	const { type } = route.params;
	const dispatch = useAppDispatch();

	const handleChange = (day) => {
		const markedDate = { [day.dateString]: { selected: true } };
		setState(markedDate);
		setSelectedDate(day.dateString);
	};

	const handlePress = () => {
		const payload = { type, date: selectedDate };
		dispatch(addNewTrip(payload));
		navigation.goBack();
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 15,
					justifyContent: "space-between",
				}}
			>
				<Calendar
					onDayPress={handleChange}
					markedDates={state}
					theme={{
						textMonthFontSize: 22,
					}}
				/>

				<CustomButton onPress={handlePress} title="Select date" />
			</View>
		</SafeAreaView>
	);
};

export default DatepickerModal;
