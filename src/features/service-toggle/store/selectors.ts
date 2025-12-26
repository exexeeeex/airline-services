import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/providers/store.provider";
import { MOCK_SERVICE_MAP } from "../../../widgets/services-list/lib";

export const selectServicesIds = (state: RootState) => state.serviceToggle.selectedServicesIds;

export const selectSelectedServices = createSelector([selectServicesIds], (selectedIds) => {
	return selectedIds.map((id) => MOCK_SERVICE_MAP[id]).filter(Boolean);
});

export const selectTotalPrice = createSelector([selectServicesIds], (selectedIds) => {
	return selectedIds.reduce((total, id) => {
		const service = MOCK_SERVICE_MAP[id];
		return total + (service.price || 0);
	}, 0);
});

export const selectIsServiceSelected = (serviceId: number) => createSelector([selectServicesIds], (selectedIds) => selectedIds.includes(serviceId));
