import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomNavStackParamList = {
	Home: undefined;
	Trips: undefined;
	TsaPreCheck: undefined;
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

type TripDetail = {
	details: {
		origin: null | string;
		destination: null | string;
		departure_date: null | string | Date;
		return_date: null | string | Date;
		airline: null | string;
	};
};

export type HomeStackParamList = {
	HomeScreen: undefined;
	TripDetails: TripDetail;
	SearchModal: undefined;
	NewTrip: undefined;
	DatePickerModal: { fieldName: string } | undefined;
};

export type HomeStackProps = NativeStackScreenProps<HomeStackParamList>;

// declare global {
// 	namespace ReactNavigation {
// 		interface RootParam
// 	}
// }
