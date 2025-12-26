import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ServiceToggleState {
	selectedServicesIds: number[];
}

const initialState: ServiceToggleState = {
	selectedServicesIds: [1],
};

export const serviceToggleSlice = createSlice({
	name: "serviceToggle",
	initialState,
	reducers: {
		toggleService: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const index = state.selectedServicesIds.indexOf(id);

			if (index === -1) state.selectedServicesIds.push(id);
			else state.selectedServicesIds.splice(index, 1);
		},
		addService: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			if (!state.selectedServicesIds.includes(id)) state.selectedServicesIds.push(id);
		},
		removeService: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			if (state.selectedServicesIds.includes(id)) state.selectedServicesIds.filter((serviceId) => serviceId !== id);
		},
	},
});

export const { toggleService, addService, removeService } = serviceToggleSlice.actions;

export default serviceToggleSlice.reducer;
