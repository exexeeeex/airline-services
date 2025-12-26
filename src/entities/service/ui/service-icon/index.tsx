/* eslint-disable react-hooks/static-components */
import { getIconComponent } from "../../lib";
import type { ServiceIconType } from "../../model/types";

interface ServiceIconProps {
	icon: ServiceIconType;
	size?: number;
	color?: string;
	className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, size = 24, color, className = "" }) => {
	const IconComponent = getIconComponent(icon);

	return (
		<div className={`${className}`}>
			<IconComponent
				size={size}
				color={color}
				aria-label={icon}
			/>
		</div>
	);
};
