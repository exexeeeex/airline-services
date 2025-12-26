import styles from "./styles.module.scss";

interface ServiceCardBodyProps {
	description: string;
}

export const ServiceCardBody: React.FC<ServiceCardBodyProps> = ({ description }) => {
	return (
		<div className={styles.body}>
			<p>{description}</p>
		</div>
	);
};
