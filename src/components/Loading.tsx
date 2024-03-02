import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<ActivityIndicator />
		</View>
	);
};

export default Loading;
