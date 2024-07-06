import { StyleSheet, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import moment from "moment";

const UpcomingTripCard = () => {
	const handlePress = async () => {};

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

export default UpcomingTripCard;
