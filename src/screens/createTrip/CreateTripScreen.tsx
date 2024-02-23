import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { Icon } from "@rneui/themed";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import CustomButton from "../../components/buttons/CustomButton";

const PlaneTakeoffIcon = () => (
	<Icon name="airplane-takeoff" type="material-community" />
);

const PlaneLandingIcon = () => (
	<Icon name="airplane-landing" type="material-community" />
);

const CalendarIcon = () => (
	<Icon name="calendar-range-outline" type="material-community" />
);

const CreateTripScreen = ({ navigation }: HomeStackProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({
		origin: "",
		destination: "",
		departureDate: moment().format("ddd, MMM DD"),
		arrivalDate: moment().add(3, "days").format("ddd, MMM DD"),
		airline: "",
	});

	console.log();

	const goBack = () => navigation.pop();

	const clearInputs = () => {
		setState({
			origin: "",
			destination: "",
			departureDate: moment().format("ddd, MM DD"),
			arrivalDate: moment().format("ddd, MM DD"),
			airline: "",
		});
	};

	const handleSubmit = async (e) => {
		setIsLoading(true);
		console.log(e);
		try {
			// clearInputs();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<ScrollView style={styles.container}>
				<Input
					label="Where from"
					leftIcon={<PlaneTakeoffIcon />}
					placeholder="Enter an origin"
					onChangeText={(value) => setState({ ...state, origin: value })}
				/>

				<Input
					label="Where to"
					leftIcon={<PlaneLandingIcon />}
					placeholder="Enter a destination"
					onChangeText={(value) =>
						setState({ ...state, destination: value })
					}
				/>

				<TouchableOpacity
					style={styles.dateInput}
					onPress={() => navigation.navigate("DatePickerModal")}
				>
					<CalendarIcon />
					<Text>
						{state.departureDate} - {state.arrivalDate}
					</Text>
				</TouchableOpacity>

				<CustomButton onPress={handleSubmit} title="Create" />

				{/* <Button
						size="sm"
						buttonStyle={styles.button}
						title="Create"
						loading={isLoading}
					/> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateTripScreen;
