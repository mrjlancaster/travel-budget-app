import React, { useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { Icon } from "@rneui/themed";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import InputGroupContainer from "./form/InputGroup";
import CustomButton from "../../components/buttons/CustomButton";
import DateButton from "./form/DateButtonGroup";
import { useAppSelector } from "../../hooks";
import { addNewTrip, selectNewTripDraft } from "../../features/tripsSlice";

const PlaneTakeoffIcon = () => (
	<Icon name="airplane-takeoff" type="material-community" />
);

const PlaneLandingIcon = () => (
	<Icon name="airplane-landing" type="material-community" />
);

const CreateTripScreen = ({ navigation }: HomeStackProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const newTripDraft = useAppSelector(selectNewTripDraft);
	console.log("Draft =>", newTripDraft);
	const [lastEdited, setLastEdited] = useState(null);
	const [state, setState] = useState({
		origin: "",
		destination: "",
		departureDate: moment().format("ddd, MMM DD"),
		returnDate: moment().add(3, "days").format("ddd, MMM DD"),
		airline: "",
	});

	const clearInputs = () => {
		setState({
			origin: "",
			destination: "",
			departureDate: moment().format("ddd, MM DD"),
			returnDate: moment().format("ddd, MM DD"),
			airline: "",
		});
	};

	const handleBlur = (e) => {
		console.error(lastEdited);
		// dispatch(addNewTrip({type: }))
	};

	const handleChange = (text, name) => {
		setState({ ...state, [name]: text });
		setLastEdited(name);
	};

	const handleSubmit = async () => {
		setIsLoading(true);

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
					name="origin"
					label="Where from"
					value={state.origin}
					placeholder="Enter an origin"
					handleEndEditing={handleBlur}
					onchange={handleChange}
				>
					<PlaneTakeoffIcon />
				</InputGroupContainer>

				<InputGroupContainer
					name="destination"
					label="Where to"
					value={state.destination}
					placeholder="Enter a destination"
					handleEndEditing={handleBlur}
					onchange={handleChange}
				>
					<PlaneLandingIcon />
				</InputGroupContainer>

				<View style={styles.inputGroup}>
					<View style={styles.dateInputWrapper}>
						<DateButton
							label="From"
							title={state.departureDate}
							type="departure"
						/>
						<DateButton
							label="To"
							title={state.returnDate}
							type="return"
						/>
					</View>
				</View>

				<InputGroupContainer
					name="airline"
					label="Airline"
					value={state.airline}
					placeholder="Enter the airline"
					handleEndEditing={handleBlur}
					onchange={handleChange}
				>
					{/* <PlaneLandingIcon /> */}
				</InputGroupContainer>

				<View style={styles.submitButtonWrapper}>
					<CustomButton onPress={handleSubmit} title="Create" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateTripScreen;
