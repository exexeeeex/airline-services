import { serviceHelper } from '../../../../entities/service/lib';
import { useSelectedServices } from '../../../../features/service-toggle/store/hooks';
import styles from './styles.module.scss';

export const TotalPrice: React.FC = () => {
    const { total } = useSelectedServices();

    const { formatPrice } = serviceHelper;
    const formattedPrice = formatPrice(total);

    return (
        <div className={styles.total}>
            <span className={styles.total__inner}>Стоимость:</span>
            <span className={styles.total__price}>{formattedPrice}</span>
        </div>
    );
};
