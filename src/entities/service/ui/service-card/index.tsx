import { useIsServiceSelected } from "../../../../features/service-toggle/store/hooks";
import type { Service } from "../../model";
import { ServiceCardBody } from "../service-card-body";
import { ServiceCardFooter } from "../service-card-footer";
import { ServiceCardHeader } from "../service-card-header";
import styles from "./styles.module.scss";

export interface ServiceCardProps {
	service: Service;
	className?: string;
	children: React.ReactNode;
	onServiceClick?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className, children, onServiceClick }) => {
	const isSelected = useIsServiceSelected(service.id);

	return (
		<div className={`${styles.card} ${className} ${isSelected ? styles.selected : ""}`}>
			<ServiceCardHeader
				icon={service.icon}
				name={service.name}
			/>
			<ServiceCardBody description={service.description} />
			<ServiceCardFooter price={service.price}>{children}</ServiceCardFooter>
		</div>
	);
};
