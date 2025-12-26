import { ServicesList } from "../../../widgets/services-list";
import styles from "./styles.module.scss";

export const ServicesPage: React.FC = () => {
	return (
		<section className={styles.page}>
			<h1>Наши услуги</h1>
			<section className={styles.page__content}>
				<div className={styles.page__content__list}>
					<ServicesList />
				</div>
			</section>
		</section>
	);
};
