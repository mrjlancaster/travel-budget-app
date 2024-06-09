import React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Text,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { useEffect } from "react";
import { apiInstance } from "../../api/axios";
import { logout, selectUser } from "../../features/authSlice";
import Icon from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProfileScreenProps } from "../../navigation/types";

type Item = {
	label: string;
	action: () => void;
};

const ListItem = ({ label, action }: Item) => {
	return (
		<TouchableOpacity style={styles.listItem} onPress={action}>
			<Text style={[styles.listItemLabel]}>{label}</Text>
			<Icon name="chevron-forward-outline" size={24} color="#7D848D" />
		</TouchableOpacity>
	);
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
	const { user } = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	const DATA = [
		{
			action: () => navigation.navigate("EditProfile"),
			label: "Profile",
		},
		{
			action: () => navigation.navigate("Notifications"),
			label: "Notifications",
		},
		{
			action: () => navigation.navigate("Settings"),
			label: "Settings",
		},
		{ action: () => dispatch(logout()), label: "Logout" },
	];

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await apiInstance.get(`/api/users/${1}`);

				if (data.success) {
					// do something
				}
			} catch (err) {
				if (err.response) {
					// handle error
				}
			}
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.screenTitle}>Account</Text>
			<FlatList
				ListHeaderComponentStyle={styles.listHeader}
				ListHeaderComponent={() => {
					return (
						<React.Fragment>
							<Avatar
								size={120}
								rounded
								source={{
									uri: "https://editor.analyticsvidhya.com/uploads/81701adidas-nft-bored-ape-810x524.jpg",
								}}
							/>
							<Text style={styles.userEmail}>{user?.email}</Text>
						</React.Fragment>
					);
				}}
				contentContainerStyle={styles.scrollView}
				data={DATA}
				renderItem={({ item }) => (
					<ListItem label={item.label} action={item.action} />
				)}
				ItemSeparatorComponent={() => (
					<View style={{ backgroundColor: "#e0e0e0", height: 1 }} />
				)}
				// keyExtractor={item => }
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	screenTitle: {
		fontSize: 24,
		marginTop: 10,
		fontWeight: "500",
		textAlign: "center",
		// paddingHorizontal: 24,
	},
	heading: {
		fontSize: 28,
	},
	listHeader: {
		paddingTop: 40,
		alignItems: "center",
		marginBottom: 50,
	},
	userEmail: {
		fontSize: 18,
		fontWeight: "300",
		marginTop: 20,
	},
	scrollView: {
		flex: 1,
	},
	listItem: {
		marginVertical: 18,
		paddingHorizontal: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	listItemLabel: {
		fontSize: 17,
		fontWeight: "500",
	},
	actionContainer: {
		flex: 1,
		borderWidth: 1,
		width: "100%",
	},
});

export default ProfileScreen;
