import { View, Text, Image } from "react-native";
import React from "react";

const CustomHeader = (props) => {
	return (
		<View style={{ height: 400 }}>
			<Image
				style={{ height: "100%", aspectRatio: 1 }}
				source={{
					uri: `https://source.unsplash.com/random/search?cancun+mexico+city`,
				}}
			/>
		</View>
	);
};

export default CustomHeader;
