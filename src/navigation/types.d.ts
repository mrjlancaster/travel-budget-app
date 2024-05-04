import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

// Auth screens Types
export type AuthStackParamList = {
	Login: undefined;
	Register: undefined;
	ForgotPassword: undefined;
	ResetPassword: undefined;
};

export type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">;
export type RegisterProps = NativeStackScreenProps<
	AuthStackParamList,
	"Register"
>;
export type ForgotPasswordProps = NativeStackScreenProps<
	AuthStackParamList,
	"ForgotPassword"
>;
export type ResetPasswordProps = NativeStackScreenProps<
	AuthStackParamList,
	"ResetPassword"
>;
//--------- end --------------//

// Bottom nav types
export type BottomNavStackParamList = {
	Home: undefined;
	Trips: undefined;
	TsaPreCheck: undefined;
	Account: undefined;
};

export type HomeProps = BottomTabScreenProps<BottomNavStackParamList, "Home">;
export type TripsProps = BottomTabScreenProps<BottomNavStackParamList, "Trips">;
export type TsaPreCheckProps = BottomTabScreenProps<
	BottomNavStackParamList,
	"TsaPreCheck"
>;
export type AccountProps = BottomTabScreenProps<
	BottomNavStackParamList,
	"Account"
>;

// --------- end ------------//

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

export type HomeScreenProps = NativeStackScreenProps<
	HomeStackParamList,
	"HomeScreen"
>;

export type HomeStackProps = NativeStackScreenProps<HomeStackParamList>;

// declare global {
// 	namespace ReactNavigation {
// 		interface RootParam
// 	}
// }
