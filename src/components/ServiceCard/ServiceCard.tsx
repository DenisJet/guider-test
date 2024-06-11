import Button from '../Button/Button';
import styles from './ServiceCard.module.css';

export type ServiceCardProps = {
  id: number;
  image: string;
  title: string;
  text: string;
};

export function ServiceCard({ image, title, text }: ServiceCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={`Иконка ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <Button />
    </div>
  );
}
