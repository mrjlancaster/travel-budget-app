import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const TravelCard = ({ destination }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("TripDetails", { destination: destination });
	};

	console.log(destination);
	return (
		<Card style={styles.card} elevation={1} onPress={handlePress}>
			<Card.Cover
				style={styles.bgCover}
				source={{
					uri: `https://source.unsplash.com/random?${destination.city}+travel`,
				}}
			/>
			<Card.Title
				title="Playa Del Carmen, Mexico"
				titleStyle={styles.title}
			/>
			<View>
				<Icon name="location-sharp" size={24} />
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	// cardsContainer: {
	// 	marginTop: 20,
	// 	shadowColor: "#000",
	// 	shadowOffset: { width: 0, height: 2 },
	// 	shadowOpacity: 0.5,
	// 	shadowRadius: 2,
	// },
	card: {
		marginTop: 20,
		backgroundColor: "#fff",
		borderRadius: 4,
		// height: 140,
		// shadowColor: "#000",
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.5,
		// shadowRadius: 2,
	},
	bgCover: {
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		height: 140,
	},
	title: {
		fontSize: 19,
		fontWeight: "500",
	},
	// cardContent: {
	// 	position: "relative",
	// 	height: "100%",
	// },
	// cardTitle: {
	// 	position: "absolute",
	// 	bottom: 0,
	// 	fontStyle: "italic",
	// 	color: "#fff",
	// 	fontWeight: "bold",
	// 	fontSize: 19,
	// 	paddingBottom: 10,
	// 	paddingHorizontal: 20,
	// 	textShadowColor: "rgba(0, 0, 0, 0.75)",
	// 	textShadowOffset: { width: -1, height: 1 },
	// 	textShadowRadius: 10,
	// },
});

export default TravelCard;

// <ImageBackground
// source={{
// 	uri: `https://source.unsplash.com/random?${destination.city}+travel`,
// }}
// imageStyle={{ borderRadius: 4 }}>
// <Card.Content style={styles.cardContent}>
// 	<Text>Trip to</Text>
// 	<Title
// 		style={
// 			styles.cardTitle
// 		}>{`${destination.city}, ${destination.country}`}</Title>
// </Card.Content>
// </ImageBackground>
