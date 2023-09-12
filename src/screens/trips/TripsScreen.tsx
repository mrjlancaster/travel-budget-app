import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ListItem, Icon, Image } from "@rneui/themed";
import TopNavigation from "../../components/TopNavigation";

const TripsScreen = () => {
  const navigation = useNavigation();

  const trips = [
    {
      id: 1,
      city: "Mexico City",
      country: "Mexico",
    },
    {
      id: 2,
      city: "Chicago",
      country: "US",
    },
    {
      id: 3,
      city: "Austin",
      country: "US",
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const handleClick = (id) => {
    const itemPressed = trips.find((trip) => trip.id === id);
    console.log(itemPressed);

    navigation.navigate("TripDetails", { destination: itemPressed });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>My Trips</Text>
      {/* <TopNavigation title={`${trips.length} Trips`} /> */}
    </SafeAreaView>
  );
};

export default TripsScreen;
