import { ServiceList } from '../ServiceList/ServiceList';
import styles from './Service.module.css';

const services = [
  {
    id: 1,
    image: '/strategy.svg',
    title: 'Стратегия',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,
    image: '/analise.svg',
    title: 'Анализ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    image: '/social.svg',
    title: 'Соц сети',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 4,
    image: '/dev.svg',
    title: 'Развитие',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 5,
    image: '/content.svg',
    title: 'Контент',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 6,
    image: '/design.svg',
    title: 'Дизайн UX',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 7,
    image: '/adv.svg',
    title: 'Таргетированная реклама',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 8,
    image: '/product.svg',
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
