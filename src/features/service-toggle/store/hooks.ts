import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../../../app/providers/store.provider";
import { addService, toggleService } from "./slice";
import { selectIsServiceSelected, selectSelectedServices, selectTotalPrice } from "./selectors";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useServiceToggle = () => {
	const dispatch = useAppDispatch();

	return {
		toggleService: (id: number) => dispatch(toggleService(id)),
		addService: (id: number) => dispatch(addService(id)),
	};
};

export const useSelectedServices = () => {
	const selectedServices = useAppSelector(selectSelectedServices);
	const total = useAppSelector(selectTotalPrice);

	return { selectedServices, total };
};

export const useIsServiceSelected = (id: number) => {
	const isSelected = useAppSelector(selectIsServiceSelected(id));

	return isSelected;
};
