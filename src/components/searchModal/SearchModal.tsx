import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { SearchBar } from "@rneui/themed";
import { apiInstance } from "../../api/axios";
import SearchFilter from "./SearchFilter";

const SearchModal = () => {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [cities, setCities] = useState([]);
	const ref = useRef(null);

	const handleSearch = async (string: string) => {
		try {
			// const filtered = countries.filter((item: string) => {
			// 	return item.includes(searchValue);
			// });

			if (string.includes(" ")) {
				string = string.replaceAll(" ", "+");
			}

			const { data } = await apiInstance.get(`/api/search?dest=${string}`);
			console.error("search response ", data.data);
			console.warn(data.data[1]);

			if (data.success) {
				setSearchResults([data.data[1]]);
			}
		} catch (err) {
			console.log(err);
		}
	};

	// const searchCities = async () => {
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

	// useEffect(() => {
	// 	if (search !== "") {
	// 		searchCities();
	// 	}
	// }, []);

	const handleChange = (text: string) => {
		setSearch(text);

		setTimeout(() => {
			if (text !== "" && text.length >= 3) {
				handleSearch(text);
			}
		}, 2000);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<SearchBar
				inputContainerStyle={styles.inputContainer}
				containerStyle={styles.searchbarContainer}
				ref={ref}
				onClear={() => setSearchResults([])}
				value={search}
				placeholder="Search destination..."
				onChangeText={handleChange}
			/>

			<SearchFilter results={searchResults} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	searchbarContainer: {
		borderTopWidth: 0,
		borderBottomWidth: 0,
		backgroundColor: "none",
	},
	inputContainer: {
		backgroundColor: "#ebedef",
		borderRadius: 10,
	},
});

export default SearchModal;
