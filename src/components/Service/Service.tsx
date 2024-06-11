import { ServiceList } from '../ServiceList/ServiceList';
import styles from './Service.module.css';

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
      <ServiceList />
    </section>
  );
}
