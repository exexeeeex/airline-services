import { configureStore } from "@reduxjs/toolkit";
import serviceToggleReducer from "../../features/service-toggle/store/slice";

export const store = configureStore({
	reducer: {
		serviceToggle: serviceToggleReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
