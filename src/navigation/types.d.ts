import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomNavStackParamList = {
	Home: undefined;
	Trips: undefined;
	Account: undefined;
};

export type BottomNavStackProps =
	NativeStackScreenProps<BottomNavStackParamList>;

export type AuthStack = {
	Login: undefined;
	Register: undefined;
	ForgotPassword: undefined;
	ResetPassword: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStack>;

export type HomeStackParamList = {
	HomeScreen: undefined;
	TripDetails: undefined;
	SearchModal: undefined;
	NewTrip: undefined;
	DatePickerModal: undefined;
};

export type HomeStackProps = NativeStackScreenProps<HomeStackParamList>;
