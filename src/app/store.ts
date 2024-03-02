import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import tripsReducer from "../features/tripsSlice";
import { api } from "../services";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		trips: tripsReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
