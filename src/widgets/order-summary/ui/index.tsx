import { ClipboardList } from 'lucide-react';
import { CheckoutButton } from '../../../features/checkout';
import { SelectedServiceList } from './selected-service-list';
import { TotalPrice } from './total-price';
import styles from './styles.module.scss';

export const OrderSummary: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <ClipboardList size={35} color='var(--gray-600)' />
                <h2>Итого</h2>
            </div>
            <div>
                <SelectedServiceList />
            </div>
            <div>
                <TotalPrice />
            </div>
            <CheckoutButton />
        </div>
    );
};
