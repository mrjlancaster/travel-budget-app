import { Text, SectionList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";

type ResultsProps = {
	results: [];
};

type ItemProps = {
	item: { id: number; name: string };
};

const ListItem = ({ item }: ItemProps) => {
	const handlePress = () => {};

	return (
		<TouchableOpacity style={styles.listItem} onPress={handlePress}>
			<Icon name="airplanemode-active" size={20} />
			<Text style={styles.listItemText}>{item.name}</Text>
		</TouchableOpacity>
	);
};

const SearchFilter = ({ results }: ResultsProps) => {
	return (
		<SectionList
			style={styles.container}
			sections={results}
			renderItem={({ item }) => <ListItem item={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={styles.sectionHeader}>{title}</Text>
			)}
			ItemSeparatorComponent={() => <Divider />}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
	},
	listItem: {
		marginTop: 5,

		flexDirection: "row",
		alignItems: "center",
		gap: 6,
		padding: 10,
	},
	listItemText: {
		// fontSize: 15,
	},
	sectionHeader: {
		// fontSize: 16,
		paddingVertical: 10,
		// paddingHorizontal: 2,
		color: "#808a93",
		backgroundColor: "#fff",
	},
});

export default SearchFilter;
