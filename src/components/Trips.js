import React from "react";
import { FlatList, View } from "react-native";

const destinations = [
  { key: 1, title: "Mexico City" },
  { key: 2, title: "Chicago" },
  { key: 3, title: "Austin" },
];

const Trips = () => {
  return <FlatList data={destinations} />;
};

export default Trips;
