import { OrderSummary } from '../../../widgets/order-summary/ui';
import { ServicesList } from '../../../widgets/services-list';
import styles from './styles.module.scss';

export const ServicesPage: React.FC = () => {
    return (
        <section className={styles.page}>
            <h1>Наши услуги</h1>
            <section className={styles.page__content}>
                <div className={styles.page__content__list}>
                    <ServicesList />
                </div>
                <div className={styles.page__content__summary}>
                    <OrderSummary />
                </div>
            </section>
        </section>
    );
};
