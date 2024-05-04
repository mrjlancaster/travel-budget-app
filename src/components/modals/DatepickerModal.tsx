import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import CustomButton from "../../components/buttons/CustomButton";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import { addNewTrip, selectNewTripDraft } from "../../features/tripsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const DEFAULT_SELECTED_COLOR = "#00BBF2";

const INITIAL_STATE = {
	[moment().format("YYYY-MM-DD")]: { selected: true },
};

const DatepickerModal = ({ navigation, route }: HomeStackProps) => {
	const [state, setState] = useState<any>(INITIAL_STATE);
	const draft = useAppSelector(selectNewTripDraft);

	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const { fieldName }: any = route.params;
	const dispatch = useAppDispatch();

	const handleChange = (day) => {
		const markedDate = { [day.dateString]: { selected: true } };
		setState(markedDate);
		setSelectedDate(day.dateString);
	};

	const handlePress = () => {
		const payload = { [fieldName]: selectedDate };
		dispatch(addNewTrip(payload));
		navigation.goBack();
	};

	useEffect(() => {
		let date: any;

		if (fieldName === "departure_date") {
			if (draft?.departure_date !== null) {
				date = draft?.departure_date;
				setState({ [date]: { selected: true } });
			}
		}

		if (fieldName === "return_date") {
			if (draft?.return_date) {
				date = draft?.return_date;
				setState({ [date]: { selected: true } });
			}
		}
	}, []);

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
