import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ListItem } from "@rneui/themed";
import axios from "axios";
import { SEARCH_URL } from "@env";

const SearchItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <ListItem key={item.id}>
        <ListItem.Content>
          <ListItem.Title>{item.city}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

const SearchBox = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  // const findAirport = async () => {
  //   try {
  //     // ?country=something&city=something
  //     // const URL = RAPID_API_URL;
  //     const config = {
  //       headers: {
  //         "X-RapidAPI-Key": RAPID_API_KEY,
  //         "X-RapidAPI-Host": RAPID_API_HOST,
  //       },
  //     };

  //
  //     // Sao Paulo, Brazil (GRU)
  //     const res = await axios.get(`${url}${parameter}`, config);

  //     const airports = res.data.map((item, i) => {
  //       return {
  //         id: i,
  //         city: item.city,
  //         country: item.country,
  //         airportShort: item.iata,
  //         string: `${item.city}, ${item.country} (${item.iata})`,
  //       };
  //     });

  //     setSearchResults(airports);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSearch = async (parameter) => {
    try {
      // airport string format - Sao Paulo, Brazil (GRU)
      const url = `${SEARCH_URL}/api/cities/?search=${parameter}`;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(url, config);
      const list = data._embedded["city:search-results"];

      const results = list.map((city, i) => ({
        id: i,
        city: city.matching_full_name,
      }));

      setSearchResults(results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!searchQuery.length) {
      setSearchResults([]);
    } else {
      const city = searchQuery.split(" ");
      let param = "";

      if (city.length > 1) {
        for (let i = 0; i < city.length; i++) {
          if (i === 0) {
            param += city[i];
          } else {
            param += `%20${city[i]}`;
          }
        }

        handleSearch(param);
      } else {
        handleSearch(city[0]);
      }
    }
  }, [searchQuery]);

  return (
    <ScrollView style={styles.searchBox}>
      {searchResults.map((result, i) => {
        return <SearchItem key={i} item={result} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBox: {},
});

export default SearchBox;
