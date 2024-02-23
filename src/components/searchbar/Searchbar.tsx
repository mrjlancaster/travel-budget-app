import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchIcon from "react-native-vector-icons/Feather";

export default function Searchbar() {
	const [searchValue, onChangeText] = useState("");
	const [cities, setCities] = useState<string[]>([]);
	const [searchResults, setSearchResults] = useState([]);
	const navigation = useNavigation();

	// const getCitiesAndCountries = async () => {
	// 	try {
	// 		const url = "https://countriesnow.space/api/v0.1/countries";
	// 		const { data } = await axios.get(url, { headers: {} });

	// 		const mappedData = data.data.map((country: Country) => {
	// 			return {
	// 				country: country.country,
	// 				cities: country.cities,
	// 			};
	// 		});

	// 		const countriesArr = mappedData.map(
	// 			(country: Country) => country.country
	// 		);

	// 		const citiesArr: string[] = [];
	// 		for (let i = 0; i < mappedData.length; i++) {
	// 			const items = mappedData[i].cities;
	// 			citiesArr.push(...items);
	// 		}

	// 		setCities(citiesArr);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("SearchModal")}
			style={styles.container}
		>
			<Text>
				<SearchIcon name="search" size={17} /> Search destination...
			</Text>
			{/* <TextInput
				placeholder="Search destination..."
				value={searchValue}
				onChangeText={handleChange}
			/> */}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderColor: "#ddd",
		borderWidth: 2,
		flexDirection: "row",
		gap: 10,
		padding: 10,
		borderRadius: 5,
	},
});
