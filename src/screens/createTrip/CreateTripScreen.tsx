import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Icon } from "@rneui/themed";
import { HomeStackProps } from "../../navigation/types";
import moment from "moment";
import InputGroupContainer from "./form/InputGroup";
import CustomButton from "../../components/buttons/CustomButton";
import DateButton from "./form/DateButtonGroup";
import {
	useCreateTripMutation,
	useGetAirlinesQuery,
} from "../../services/api/tripsApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	selectNewTripDraft,
	resetTripDraft,
	addNewTrip,
} from "../../features/tripsSlice";
import { logout } from "../../features/authSlice";
import AppDropdownPicker from "../../components/AppDropdownPicker";

const PlaneTakeoffIcon = () => (
	<Icon name="airplane-takeoff" type="material-community" />
);

const PlaneLandingIcon = () => (
	<Icon name="airplane-landing" type="material-community" />
);

function formatDate(date: any) {
	return moment(date).format("ddd, MMM DD");
}

interface Airline {
	label: string;
	value: string;
}

type Airlines = Airline[];

const CreateTripScreen = ({ navigation }: HomeStackProps) => {
	const newTripDraft = useAppSelector(selectNewTripDraft);
	const [skip, setSkip] = useState(true);
	console.log("DRAFT => ", newTripDraft);
	const [createTrip, result] = useCreateTripMutation();
	const [lastEdited, setLastEdited] = useState<any>("");
	const [isLoading, setIsLoading] = useState(false);
	const [airlines, setAirlines] = useState<Airlines>([]);
	const [airlineSelected, setAirlineSelected] = useState<Airline | null>(null);
	const dispatch = useAppDispatch();
	const { data, isSuccess } = useGetAirlinesQuery(undefined, { skip });

	const [state, setState] = useState({
		origin: "",
		destination: "",
		departure_date: formatDate(moment()),
		return_date: moment().add(3, "days").format("ddd, MMM DD"),
		airline: "",
	});

	useEffect(() => {
		if (!airlines.length) {
			setSkip(false);

			if (isSuccess) {
				const list = data.map(({ name, iata_code }, i) => {
					return { index: i, label: name, value: iata_code };
				});

				setAirlines(list);
			}
		}
	}, [data]);

	// console.log("state ", state);

	const resetState = () => {
		setAirlineSelected(null);
		setAirlines([]);
		setState({
			origin: "",
			destination: "",
			departure_date: formatDate(moment()),
			return_date: moment().add(3, "days").format("ddd, MMM DD"),
			airline: "",
		});
	};

	const handleBlur = () => {
		const item = { [lastEdited]: state[lastEdited] };
		dispatch(addNewTrip(item));
	};

	const handleChange = (text: string, name: string) => {
		setState({ ...state, [name]: text });
		setLastEdited(name);
	};

	const handleSubmit = async () => {
		setIsLoading(true);

		const payload = {
			...state,
			departure_date: new Date(newTripDraft.departure_date),
			return_date: new Date(newTripDraft.return_date),
		};

		try {
			const response = await createTrip(payload).unwrap();
			console.error("New Trip created", response);

			if (response.success) {
				// handle adding new trip to trip list state
				dispatch(resetTripDraft(undefined));
				resetState();
				navigation.goBack();
			}
		} catch (err: any) {
			console.error("ERROR", err);

			if (err.data === "Forbidden") {
				dispatch(logout());
			}
		}
	};

	const handleAirlineSelection = (value: string) => {
		setState({ ...state, airline: value });
		const item = { airline: value };
		dispatch(addNewTrip(item));
	};

	useEffect(() => {
		if (newTripDraft?.departure_date || newTripDraft?.return_date) {
			let departureDate, returnDate;

			if (newTripDraft?.departure_date) {
				departureDate = formatDate(newTripDraft?.departure_date);
			}

			if (newTripDraft?.return_date) {
				returnDate = formatDate(newTripDraft?.return_date);
			}

			setState({
				...state,
				...(newTripDraft?.departure_date && {
					departure_date: departureDate,
				}),
				...(newTripDraft?.return_date && { return_date: returnDate }),
			});
		}
	}, [newTripDraft]);

	console.log(newTripDraft);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.container}>
				<View style={styles.formContainer}>
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
								date={state.departure_date}
								fieldName="departure_date"
							/>
							<DateButton
								label="To"
								date={state.return_date}
								fieldName="return_date"
							/>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Airline</Text>
						<AppDropdownPicker
							value={airlineSelected}
							setValue={setAirlineSelected}
							items={airlines}
							setItems={setAirlines}
							onChangeValue={(val: string) =>
								handleAirlineSelection(val)
							}
							placeholder="Select Airline"
							style={styles.ddInput}
							textStyle={styles.ddPlaceholder}
							labelStyle={styles.ddLabel}
							dropDownContainerStyle={styles.openContainer}
							listItemLabelStyle={styles.listItem}
						/>
					</View>
				</View>

				<View style={styles.submitButtonWrapper}>
					<CustomButton onPress={handleSubmit} title="Create" />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default CreateTripScreen;
