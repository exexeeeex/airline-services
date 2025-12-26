/* eslint-disable react-refresh/only-export-components */
import type { ServiceIconType } from "../model/types";
import { Beef, Car, Handbag, Wifi, type LucideIcon } from "lucide-react";

export const ICON_MAP: Record<ServiceIconType, LucideIcon> = {
	bag: Handbag,
	car: Car,
	food: Beef,
	wifi: Wifi,
} as const;

export const getIconComponent = (iconType: ServiceIconType): LucideIcon => {
	return ICON_MAP[iconType];
};

export const renderIcon = (iconType: ServiceIconType, size: number = 24, color: string = "currentColor"): React.ReactNode => {
	const IconComponent = getIconComponent(iconType);
	return (
		<IconComponent
			size={size}
			color={color}
		/>
	);
};
