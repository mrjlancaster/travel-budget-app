import { FlatList, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useAppSelector } from "../../hooks";
import { selectTrips } from "../../features/tripsSlice";
import { Card } from "react-native-paper";
import NoTripsView from "./NoTripsView";

type Trip = {
	id: number;
	origin: null | string;
	destination: null | string;
	departure_date: null | string | Date;
	return_date: null | string | Date;
	airline: null | string;
};

type ItemProps = {
	details: Trip;
};

const Item = ({ details }: ItemProps) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("TripDetails", { details: details });
	};

	return (
		<Card style={styles.card} elevation={1} onPress={handlePress}>
			<Card.Cover
				style={styles.bgCover}
				source={{
					uri: `https://source.unsplash.com/random?${details.destination}`,
				}}
			/>
			<Card.Title
				title={details.origin + " to " + details.destination}
				titleStyle={styles.title}
			/>
			<View></View>
		</Card>
	);
};

const List = () => {
	const { trips } = useAppSelector(selectTrips);
	console.error("TRIPS LIST", trips);

	return (
		<FlatList
			style={{ paddingHorizontal: 15 }}
			ListEmptyComponent={NoTripsView}
			data={trips}
			renderItem={({ item }) => <Item details={item} />}
			keyExtractor={(item) => String(item.id)}
		>
			<Text>List</Text>
		</FlatList>
	);
};

const styles = StyleSheet.create({
	card: {
		marginTop: 20,
		borderRadius: 4,
	},
	bgCover: {
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		height: 140,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
	},
});

export default List;
