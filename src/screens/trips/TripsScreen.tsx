import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ListItem, Icon, Image } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { fetchDestinationCardBg } from "../../api/pexelsApi";
import NoTripsView from "./NoTripsView";

const data = [{ dest: "Austin texas" }];

const TripsScreen = () => {
	const [cardBackground, setCardBackground] = useState<null | string>(null);
	const [trips, setTrips] = useState([]);
	const navigation = useNavigation();

	// const trips = [
	// 	{
	// 		id: 1,
	// 		city: "Mexico City",
	// 		state: null,
	// 		country: "Mexico",
	// 	},
	// 	{
	// 		id: 2,
	// 		city: "Chicago",
	// 		state: "IL",
	// 		country: "US",
	// 	},
	// 	{
	// 		id: 3,
	// 		city: "Austin",
	// 		country: "US",
	// 	},
	// ];

	const handleFetch = async () => {
		const queryStr = data[0].dest.split(" ").join("+");
		const { photos } = await fetchDestinationCardBg(queryStr);
		const randomIndex = Math.floor(Math.random() * photos.length);

		setCardBackground(photos[randomIndex].src.medium);

		console.warn(photos[randomIndex].src.medium);
	};

	useEffect(() => {
		handleFetch();
	}, []);

	const keyExtractor = (item, index) => index.toString();

	const handleClick = (id) => {
		const itemPressed = trips.find((trip) => trip.id === id);
		console.log(itemPressed);

		navigation.navigate("TripDetails", { destination: itemPressed });
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.screenTitle}>My Trips</Text>
			{!trips.length ? (
				<NoTripsView />
			) : (
				<View>
					<Text></Text>
				</View>
			)}
			{/* <TopNavigation title={`${trips.length} Trips`} /> */}
		</SafeAreaView>
	);
};

export default TripsScreen;
