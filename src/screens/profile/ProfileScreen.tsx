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
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/axios";
import { logout, selectUser } from "../../features/authSlice";
import Icon from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProfileScreenProps } from "../../navigation/types";
import LogoutModal from "../../components/modals/LogoutModal";
import AppButton from "../../components/buttons/AppButton";
import CustomButton from "../../components/buttons/CustomButton";

type Item = {
	label: string;
	action: () => void;
};

const ListItem = ({ label, action }: Item) => {
	const logoutLabelStyle = { color: "red" };

	return (
		<TouchableOpacity style={styles.listItem} onPress={action}>
			<Text
				style={[
					styles.listItemLabel,
					label === "Logout" ? logoutLabelStyle : null,
				]}
			>
				{label}
			</Text>
			<Icon name="chevron-forward-outline" size={24} color="#7D848D" />
		</TouchableOpacity>
	);
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
	// const { user } = useAppSelector(selectUser);
	const user = "Jonathan";
	const dispatch = useAppDispatch();
	const [isLogoutModalShown, setIsLogoutModalShown] = useState(false);

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
			label: "Travel documents",
			action: () => navigation.navigate("TravelDocuments"),
		},
		{
			action: () => navigation.navigate("Settings"),
			label: "Settings",
		},
		{ action: () => setIsLogoutModalShown(true), label: "Logout" },
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
			<LogoutModal
				isVisible={isLogoutModalShown}
				close={() => setIsLogoutModalShown(false)}
			/>
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
		fontSize: 18,
		fontWeight: "400",
	},
	actionContainer: {
		flex: 1,
		borderWidth: 1,
		width: "100%",
	},
});

export default ProfileScreen;
