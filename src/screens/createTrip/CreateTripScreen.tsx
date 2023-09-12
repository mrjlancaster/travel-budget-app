import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";
import { styles } from "./styles";
import { Button, Input } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon } from "@rneui/themed";
import { HomeStackProps } from "../../navigation/types";

const PlaneTakeoffIcon = () => (
	<Icon name="airplane-takeoff" type="material-community" />
);

const PlaneLandingIcon = () => (
	<Icon name="airplane-landing" type="material-community" />
);

const CreateTripScreen = ({ navigation }: HomeStackProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");

	const goBack = () => navigation.pop();

	const clearInputs = () => {
		setFrom("");
		setTo("");
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
		<View style={styles.container}>
			<View style={styles.header}>
				<TopNavigation title="New Trip" goback={goBack} />
				{/* 
				<TouchableOpacity>
					<Text onPress={goBack}>Back</Text>
				</TouchableOpacity> */}
			</View>

			<View style={styles.content}>
				<Input
					label="Where from"
					leftIcon={<PlaneTakeoffIcon />}
					placeholder="Enter an origin"
					onChangeText={(value) => setFrom(value)}
				/>

				<Input
					label="Where to"
					leftIcon={<PlaneLandingIcon />}
					placeholder="Enter a destination"
					onChangeText={(value) => setTo(value)}
				/>

				<Button
					size="sm"
					buttonStyle={styles.button}
					title="Create"
					loading={isLoading}
				/>
			</View>
		</View>
	);
};

export default CreateTripScreen;
