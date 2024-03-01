import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ListItem, Icon, Image } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { fetchDestinationCardBg } from "../../api/pexelsApi";
import NoTripsView from "./NoTripsView";
import { useGetTripsQuery } from "../../services/api/tripsApi";
import Loading from "../../components/Loading";
import { useAppDispatch } from "../../hooks";

const data = [{ dest: "Austin texas" }];

const TripsScreen = () => {
	const [cardBackground, setCardBackground] = useState<null | string>(null);
	const { data: trips = [], isLoading, isSuccess } = useGetTripsQuery();
	// const [trips, setTrips] = useState([]);
	const dispatch = useAppDispatch();
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
			{isLoading ? (
				<Loading />
			) : !trips || !trips.length ? (
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
