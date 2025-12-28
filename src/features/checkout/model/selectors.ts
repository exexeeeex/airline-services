import { createSelector } from '@reduxjs/toolkit';
import { selectSelectedServices } from '../../service-toggle/store/selectors';

export const selectCanCheckout = createSelector(
    [selectSelectedServices],
    (selectedIds) => selectedIds.length > 0,
);
