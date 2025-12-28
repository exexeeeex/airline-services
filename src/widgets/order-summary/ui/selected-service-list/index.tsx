import { serviceHelper } from '../../../../entities/service/lib';
import { useSelectedServices } from '../../../../features/service-toggle/store/hooks';
import styles from './styles.module.scss';

export const SelectedServiceList: React.FC = () => {
    const { selectedServices } = useSelectedServices();

    return (
        <section className={styles.list}>
            {selectedServices.map((service) => (
                <div className={styles.list__item} key={service.id}>
                    <span className={styles.list__item__name}>
                        {service.name}
                    </span>
                    <span className={styles.list__item__price}>
                        {serviceHelper.formatPrice(service.price)}
                    </span>
                </div>
            ))}
        </section>
    );
};
