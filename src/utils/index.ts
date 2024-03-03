import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
	return await AsyncStorage.getItem("accessToken");
};

export const getRefreshToken = async () => {
	return await AsyncStorage.getItem("refreshToken");
};
