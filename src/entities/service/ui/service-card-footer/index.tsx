import { serviceHelper } from "../../lib";
import styles from "./styles.module.scss";

interface ServiceCardFooterProps {
	price: number;
	children: React.ReactNode;
}

export const ServiceCardFooter: React.FC<ServiceCardFooterProps> = ({ price, children }) => {
	const { formatPrice } = serviceHelper;

	const formattedPrice = formatPrice(price);
	return (
		<div className={styles.footer}>
			<div className={styles.footer__price}>
				<h2>{formattedPrice}</h2>
			</div>
			<div>{children}</div>
		</div>
	);
};
