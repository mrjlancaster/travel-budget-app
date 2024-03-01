import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { FAB, Text, Button, SearchBar } from "@rneui/themed";
// import { Searchbar } from "react-native-paper";
import TravelCard from "../../components/TravelCard";
import SearchBox from "../../components/searchbar/SearchBox";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authSlice";
import Searchbar from "../../components/searchbar/Searchbar";
import { HomeStackProps } from "../../navigation/types";

const HomeScreen = ({ navigation }: HomeStackProps) => {
	const { user, isAuthenticated } = useSelector(selectUser);
	const [searchQuery, setSearchQuery] = useState("");

	const upcomingTrip = {
		id: 1,
		city: "playa+del+carmen",
		country: "Mexico",
	};

	const handlePress = () => navigation.navigate("NewTrip");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			{/* <TopNavigation title="Welcome, Jonathan" /> */}
			<View style={styles.searchBarWrapper}>
				{/* <Searchbar
					placeholder="Search destination..."
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={styles.searchBar}
				/> */}
				<Searchbar />
				{/* <SearchBox searchQuery={searchQuery} /> */}
			</View>

			{!searchQuery.length && (
				<ScrollView
					contentContainerStyle={{ flex: 1, paddingHorizontal: 15 }}
				>
					<TravelCard destination={upcomingTrip} />
				</ScrollView>
			)}
			<FAB
				style={styles.createButton}
				onPress={handlePress}
				color="#397af8"
				icon={{ name: "add", color: "white" }}
			/>
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
		paddingHorizontal: 15,
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
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		elevation: 3,
	},
});

export default HomeScreen;
