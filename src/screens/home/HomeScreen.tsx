import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { FAB, Text, Button, SearchBar } from "@rneui/themed";
// import { Searchbar } from "react-native-paper";
import TravelCard from "../../components/TravelCard";
import SearchBox from "../../components/searchbar/SearchBox";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authSlice";
import Searchbar from "../../components/searchbar/Searchbar";
import { HomeProps, HomeScreenProps } from "../../navigation/types";
import { useGetUpcomingTripsQuery } from "../../services/api/tripsApi";
import Trips from "../../components/Trips";
import List from "../trips/List";
import UpcomingTrips from "./UpcomingTrips";
import NoTrips from "./NoTrips";
import CustomButton from "../../components/buttons/CustomButton";
import TsaPrecheckCard from "../../components/TsaPrecheckCard";
import AddTsaModal from "../../components/modals/AddTsaModal";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const [data, setData] = useState([]);
	const { user, isAuthenticated } = useSelector(selectUser);
	const [refreshing, setRefreshing] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [skip, setSkip] = useState(false);
	const [isTsaModalShown, setIsTsaModalShown] = useState(false);
	console.log(data);

	const {
		data: upcomingTrips,
		isLoading,
		isSuccess,
		isFetching,
		error,
	} = useGetUpcomingTripsQuery({ skip });

	console.log(upcomingTrips);

	const upcomingTrip = {
		id: 1,
		city: "playa+del+carmen",
		country: "Mexico",
	};

	const handlePress = () => navigation.navigate("NewTrip");

	const onChangeSearch = (query) => setSearchQuery(query);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setSkip(false);
		setRefreshing(false);
	}, []);

	useEffect(() => {
		if (isSuccess) {
			if (upcomingTrips.length) {
				// setData(upcomingTrips);
			}
		}

		setSkip(true);
	}, [isFetching]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<AddTsaModal
				isVisible={isTsaModalShown}
				close={() => setIsTsaModalShown(false)}
			/>
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

			{data.length ? (
				<UpcomingTrips onRefresh={onRefresh} refreshing={refreshing} />
			) : (
				<ScrollView contentContainerStyle={styles.content}>
					<NoTrips />
					<TsaPrecheckCard openModal={() => setIsTsaModalShown(true)} />
				</ScrollView>
			)}

			<FAB
				style={styles.createButton}
				onPress={handlePress}
				color="#17202A"
				icon={{ name: "add", color: "white" }}
			/>
		</SafeAreaView>
	);
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
	},
	content: {
		paddingHorizontal: 24,
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	welcomeText: {
		marginVertical: 20,
		fontWeight: "bold",
		fontSize: 24,
	},
	searchBarWrapper: {
		paddingHorizontal: 15,
		marginTop: 20,
	},
	searchBar: {
		marginTop: 40,
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
