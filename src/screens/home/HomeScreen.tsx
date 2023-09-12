import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB, Text, Button } from "@rneui/themed";
import { Searchbar } from "react-native-paper";
import TravelCard from "../../components/TravelCard";
import SearchBox from "../../components/searchbar/SearchBox";

const HomeScreen = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigation = useNavigation();

	const upcomingTrip = {
		id: 1,
		city: "Sao+Paulo",
		country: "Brazil",
	};

	const handlePress = () => navigation.navigate("NewTrip");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			{/* <TopNavigation title="Welcome, Jonathan" /> */}
			<View style={styles.searchBarWrapper}>
				<Searchbar
					placeholder="Search destination..."
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={styles.searchBar}
				/>
				<SearchBox searchQuery={searchQuery} />
			</View>

			{!searchQuery.length && (
				<ScrollView
					contentContainerStyle={{ flex: 1, paddingHorizontal: 10 }}
				>
					<View style={styles.cardsContainer}>
						<TravelCard destination={upcomingTrip} />
					</View>

					<FAB
						style={styles.createButton}
						onPress={handlePress}
						color="#397af8"
						icon={{ name: "add", color: "white" }}
					/>
				</ScrollView>
			)}
		</SafeAreaView>
	);
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	welcomeText: {
		marginVertical: 20,
		fontWeight: "bold",
		fontSize: 24,
	},
	searchBarWrapper: {
		paddingHorizontal: 10,
	},
	searchBar: {
		marginTop: 30,
		marginBottom: 10,
	},
	cardsContainer: {
		flex: 1,
		marginTop: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
		paddingHorizontal: 10,
	},

	card: {
		position: "relative",
		// borderRadius: 20,
	},
	cardTitle: {
		position: "absolute",
		fontStyle: "italic",
		bottom: 0,
		color: "#fff",
		fontWeight: "bold",
		fontSize: 22,
		padding: 18,
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	background: {
		position: "relative",
		height: 200,
		borderRadius: 10,
	},
	createButton: {
		position: "absolute",
		alignSelf: "center",
		bottom: 20,
	},
});

export default HomeScreen;
