import { useIsServiceSelected, useServiceToggle } from "../../store/hooks";
import styles from "./styles.module.scss";

interface ToggleButtonProps {
	serviceId: number;
	className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ serviceId, className }) => {
	const { toggleService } = useServiceToggle();
	const isSelected = useIsServiceSelected(serviceId);

	return (
		<button
			className={`${styles.button} ${isSelected ? styles.selected : ""} ${className}`}
			onClick={() => toggleService(serviceId)}
		>
			{isSelected ? "Выбрано" : "Выбрать"}
		</button>
	);
};
