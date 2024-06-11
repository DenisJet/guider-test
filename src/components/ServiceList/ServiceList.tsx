import { ServiceCard, ServiceCardProps } from '../ServiceCard/ServiceCard';
import styles from './ServiceList.module.css';

interface ServiceListProps {
  services: ServiceCardProps[];
}

export function ServiceList({ services }: ServiceListProps): JSX.Element {
  return (
    <ul className={styles.list}>
      {services &&
        services.length &&
        services.map((service) => {
          return (
            <li key={service.id} className={styles.item}>
              <ServiceCard id={service.id} image={service.image} title={service.title} text={service.text} />
            </li>
          );
        })}
    </ul>
  );
}
