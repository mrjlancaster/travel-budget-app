import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { HomeStackProps } from "../../navigation/types";

const TripDetailScreen = ({ route, navigation }: HomeStackProps) => {
	const { details } = route.params;
	console.log("DETAILS ", details);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<View style={styles.tripDetailsContainer}>
					<View style={styles.tripTitleContainer}>
						{/* <Text style={styles.detailTitle}>{destination.city}</Text>
						<Text style={styles.country}>{destination.country}</Text> */}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	headingContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	screenTitle: {
		fontSize: 28,
		fontWeight: "500",
	},
	title: {
		marginTop: 50,
		paddingHorizontal: 10,
		fontWeight: "bold",
		fontSize: 24,
	},
	background: {
		height: 300,
		marginTop: 20,
	},
	datesWrapper: {
		top: "94%",
		left: 20,
		position: "absolute",
		flexDirection: "row",
	},
	departureDate: {
		textAlign: "center",
		width: 35,
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		backgroundColor: "#000",
		padding: 5,
		borderRadius: 10,
		overflow: "hidden",
	},
	returnDate: {
		textAlign: "center",
		width: 35,
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		marginLeft: 20,
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		backgroundColor: "#000",
		padding: 5,
		borderRadius: 10,
		overflow: "hidden",
	},
	tripDetailsContainer: {
		paddingHorizontal: 10,
	},
	tripTitleContainer: {
		marginTop: 20,
		height: 100,
	},
	detailTitle: {
		fontSize: 24,
		fontWeight: "500",
	},
	country: {
		marginTop: 5,
		fontSize: 15,
		fontWeight: "400",
	},
});

export default TripDetailScreen;
