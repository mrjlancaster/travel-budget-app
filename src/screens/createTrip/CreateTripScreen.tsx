import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	ScrollView,
	TextInput,
	Pressable,
} from "react-native";
import { styles } from "./styles";
import { Button, Input } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { Icon } from "@rneui/themed";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import InputGroupContainer from "./form/InputGroupContainer";
import CustomButton from "../../components/buttons/CustomButton";
import DateButton from "./form/DateButton";
import { useCreateTripMutation } from "../../services/api/tripsApi";

const PlaneTakeoffIcon = () => (
	<Icon name="airplane-takeoff" type="material-community" />
);

const PlaneLandingIcon = () => (
	<Icon name="airplane-landing" type="material-community" />
);

const CreateTripScreen = ({ navigation }: HomeStackProps) => {
	const [createTrip, reuslt] = useCreateTripMutation();
	const [isLoading, setIsLoading] = useState(false);

	const [state, setState] = useState({
		origin: "",
		destination: "",
		departureDate: moment().format("ddd, MMM DD"),
		returnDate: moment().add(3, "days").format("ddd, MMM DD"),
		airline: "",
	});

	const goBack = () => navigation.pop();

	const clearInputs = () => {
		setState({
			origin: "",
			destination: "",
			departureDate: moment().format("ddd, MM DD"),
			returnDate: moment().format("ddd, MM DD"),
			airline: "",
		});
	};

	const handleSubmit = async () => {
		setIsLoading(true);

		try {
			const { data } = await createTrip(state).unwrap();

			if (data.success) {
				// handle adding new trip to trip list state
			}
		} catch (err) {
			console.log(err);
		}

		try {
			// clearInputs();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<ScrollView style={styles.container}>
				<InputGroupContainer
					label="Where from"
					value={state.origin}
					placeholder="Enter an origin"
					onchange={(text: string) => setState({ ...state, origin: text })}
				>
					<PlaneTakeoffIcon />
				</InputGroupContainer>

				<InputGroupContainer
					label="Where to"
					value={state.destination}
					placeholder="Enter a destination"
					onchange={(text: string) =>
						setState({ ...state, destination: text })
					}
				>
					<PlaneLandingIcon />
				</InputGroupContainer>

				<View style={styles.inputGroup}>
					{/* <Text style={styles.label}>Select dates</Text> */}

					<View style={styles.dateInputWrapper}>
						<DateButton label="From" title={state.departureDate} />
						<DateButton label="To" title={state.returnDate} />
					</View>
				</View>

				<View style={styles.submitButtonWrapper}>
					<CustomButton onPress={handleSubmit} title="Create" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateTripScreen;
