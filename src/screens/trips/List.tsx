import { FlatList, StyleSheet, View, Text, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTrips } from "../../features/tripsSlice";
import { Card } from "react-native-paper";
import NoTripsView from "./NoTripsView";
import moment from "moment";

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
	console.log(details.departure_date);

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
			<Card.Content>
				<Text>
					{moment(details.departure_date).format("MMM Do, YYYY")} -{" "}
					{moment(details.return_date).format("MMM Do, YYYY")}
				</Text>
			</Card.Content>
		</Card>
	);
};

type Props = {
	onRefresh: () => void;
	refreshing: boolean;
};

const List = ({ onRefresh, refreshing }: Props) => {
	const { trips } = useAppSelector(selectTrips);
	console.error("TRIPS LIST", trips);

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			style={{ paddingHorizontal: 24 }}
			ListEmptyComponent={NoTripsView}
			data={trips}
			renderItem={({ item }) => <Item details={item} />}
			keyExtractor={(item) => String(item.id)}
			refreshControl={
				<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
			}
		>
			<Text>List</Text>
		</FlatList>
	);
};

const styles = StyleSheet.create({
	card: {
		marginTop: 20,
		borderRadius: 4,
		backgroundColor: "#fff",
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
