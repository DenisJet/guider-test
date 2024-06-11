import { ServiceList } from '../ServiceList/ServiceList';
import styles from './Service.module.css';

const services = [
  {
    id: 1,
    image: '',
    title: 'Стратегия',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,
    image: '',
    title: 'Анализ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    image: '',
    title: 'Соц сети',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 4,
    image: '',
    title: 'Развитие',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 5,
    image: '',
    title: 'Контент',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 6,
    image: '',
    title: 'Дизайн UX',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 7,
    image: '',
    title: 'Таргетированная реклама',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 8,
    image: '',
    title: 'Продукт',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export function Service(): JSX.Element {
  return (
    <section className={styles.service}>
      <div className={styles.serviceTextContainer}>
        <h2 className={styles.title}>Сервис</h2>
        <p className={styles.slogan}>От идеи до незабываемого и измеримого результата.</p>
        <div className={styles.divider}></div>
        <p className={styles.text}>
          Интеграция безупречного производства, передовых технологий и тщательного измерения производительности
        </p>
      </div>
      <ServiceList services={services} />
    </section>
  );
}
