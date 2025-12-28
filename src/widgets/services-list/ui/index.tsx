import { ServiceCard } from '../../../entities/service';
import { ToggleButton } from '../../../features/service-toggle';
import { useServices } from '../lib';
import styles from './styles.module.scss';

export const ServicesList: React.FC = () => {
    const { services } = useServices();

    return (
        <section className={styles.place}>
            {services.map((service) => (
                <ServiceCard service={service} key={service.id}>
                    <ToggleButton serviceId={service.id} />
                </ServiceCard>
            ))}
        </section>
    );
};
