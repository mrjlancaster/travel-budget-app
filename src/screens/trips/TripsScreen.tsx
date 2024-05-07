import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ListItem, Icon, Image } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";
import { fetchDestinationCardBg } from "../../api/pexelsApi";
import NoTripsView from "./NoTripsView";
import { useGetTripsQuery } from "../../services/api/tripsApi";
import Loading from "../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTrips, selectTrips } from "../../features/tripsSlice";
import List from "./List";

const data = [{ dest: "Austin texas" }];

const TripsScreen = () => {
	const [skip, setSkip] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const { trips: myTrips } = useAppSelector(selectTrips);
	console.log("MY TRIPS", myTrips);
	const dispatch = useAppDispatch();
	const [cardBackground, setCardBackground] = useState<null | string>(null);
	const {
		data: trips,
		isLoading,
		isSuccess,
		isFetching,
		error,
	} = useGetTripsQuery({ skip: skip });
	console.log("TRIPS", trips);
	console.error("error", error);

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

	// const handleFetch = async () => {
	// 	const queryStr = data[0].dest.split(" ").join("+");
	// 	const { photos } = await fetchDestinationCardBg(queryStr);
	// 	const randomIndex = Math.floor(Math.random() * photos.length);

	// 	setCardBackground(photos[randomIndex].src.medium);

	// 	console.warn(photos[randomIndex].src.medium);
	// };

	useEffect(() => {
		// handleFetch();
	}, []);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setSkip(false);
		setRefreshing(false);
	}, []);

	useEffect(() => {
		if (isSuccess && trips.length) {
			console.error("TRIPS ", trips);
			dispatch(setTrips(trips));
		}
	}, [isFetching]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.screenTitle}>My Trips</Text>

			{isLoading ? (
				<Loading />
			) : !trips || !trips.length ? (
				<NoTripsView />
			) : (
				<List onRefresh={onRefresh} refreshing={refreshing} />
			)}
		</SafeAreaView>
	);
};

export default TripsScreen;
