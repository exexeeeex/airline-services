import type { ServiceIconType } from "../../model/types";
import { ServiceIcon } from "../service-icon";
import styles from "./styles.module.scss";

interface ServiceCardHeaderProps {
	icon: ServiceIconType;
	name: string;
}

export const ServiceCardHeader: React.FC<ServiceCardHeaderProps> = ({ icon, name }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header__icon}>
				<ServiceIcon
					icon={icon}
					size={50}
					className={""}
					color='white'
				/>
			</div>
			<div className={styles.header__name}>
				<h3 className={styles.header__name__value}>{name}</h3>
			</div>
		</div>
	);
};
