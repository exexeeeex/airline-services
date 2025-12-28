import type { RootState } from '../../../../app/providers/store.provider';
import { useSelector } from 'react-redux';
import { selectCanCheckout } from '../../';
import styles from './styles.module.scss';

interface CheckoutButtonProps {
    className?: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
    className,
}) => {
    const useAppSelector = useSelector.withTypes<RootState>();
    const canCheckout = useAppSelector(selectCanCheckout);

    const handleCheckoutOrder = async () => {
        console.log(canCheckout);
        if (!canCheckout) {
            alert('Выберите услуги');
            return;
        }

        try {
            // Логика запроса на сервер
        } catch {
            // Обработка ошибок
        }
    };

    return (
        <button
            disabled={!canCheckout}
            onClick={handleCheckoutOrder}
            className={`${styles.button} ${className}`}
            style={
                canCheckout
                    ? { backgroundColor: 'var(--secondary)', cursor: 'pointer' }
                    : {
                          backgroundColor: 'var(--secondary-dark)',
                          cursor: 'not-allowed',
                          opacity: '0.9',
                      }
            }
        >
            <span>{canCheckout ? 'Оформить' : 'Добавьте услуги'}</span>
        </button>
    );
};
