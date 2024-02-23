import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomHeaderBackButton = ({ navigation }: any) => {
	return (
		<TouchableOpacity>
			<Icon
				name="chevron-back-sharp"
				size={24}
				onPress={() => navigation.goBack()}
			/>
		</TouchableOpacity>
	);
};

export default CustomHeaderBackButton;
