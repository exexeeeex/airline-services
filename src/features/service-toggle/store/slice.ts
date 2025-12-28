import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const getServicesFromLocalStorage = () => {
    const services = localStorage.getItem('services');
    if (!services) return [1];
    else return JSON.parse(services);
};

interface ServiceToggleState {
    selectedServicesIds: number[];
}

const initialState: ServiceToggleState = {
    selectedServicesIds: getServicesFromLocalStorage(),
};

export const serviceToggleSlice = createSlice({
    name: 'serviceToggle',
    initialState,
    reducers: {
        toggleService: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const index = state.selectedServicesIds.indexOf(id);

            if (index === -1) {
                state.selectedServicesIds.push(id);
                localStorage.setItem(
                    'services',
                    JSON.stringify(state.selectedServicesIds),
                );
            } else {
                state.selectedServicesIds.splice(index, 1);
                localStorage.setItem(
                    'services',
                    JSON.stringify(state.selectedServicesIds),
                );
            }
        },
        addService: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            if (!state.selectedServicesIds.includes(id))
                state.selectedServicesIds.push(id);
        },
        removeService: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            if (state.selectedServicesIds.includes(id))
                state.selectedServicesIds.filter(
                    (serviceId) => serviceId !== id,
                );
        },
    },
});

export const { toggleService, addService, removeService } =
    serviceToggleSlice.actions;

export default serviceToggleSlice.reducer;
