import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveInStorage = async (key: string, value: string) => {
	await AsyncStorage.setItem(key, value);
};

export const getAccessToken = async () => {
	return await AsyncStorage.getItem("accessToken");
};

export const getRefreshToken = async () => {
	return await AsyncStorage.getItem("refreshToken");
};

export const clearStorage = async () => {
	await AsyncStorage.clear();
};
