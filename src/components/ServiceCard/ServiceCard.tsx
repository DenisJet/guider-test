import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import styles from './ServiceCard.module.css';
import { setActiveService } from '../../store/activeServiceSlice';

export type ServiceCardProps = {
  id: number;
  image: string;
  title: string;
  text: string;
};

export function ServiceCard({ image, title, text, id }: ServiceCardProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={`Иконка ${title}`} width={65} height={65} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div
        className={styles.button}
        onClick={() => {
          dispatch(setActiveService(id.toString()));
        }}
      >
        <Button />
      </div>
    </div>
  );
}
