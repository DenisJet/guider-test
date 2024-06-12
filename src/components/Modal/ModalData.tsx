import { useContext } from 'react';
import { useGetPostQuery } from '../../store/api';
import { ModalContext } from '../../context/modal.context';
import styles from './Modal.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function ModalData() {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const activeServiceId = useSelector((state: RootState) => state.activeService.id);
  const { data, isLoading, error } = useGetPostQuery(activeServiceId);

  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setIsOpen(false)}>
      {error ? (
        <div
          className={isOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
          onClick={(evt) => evt.stopPropagation()}
        >
          <button type='button' title='Закрыть' className={styles.button} onClick={() => setIsOpen(false)}>
            <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
                fill='#FFFFFF'
              ></path>
            </svg>
          </button>
          <p>Error: something went wrong, try again later...</p>
        </div>
      ) : isLoading ? (
        <div
          className={isOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
          onClick={(evt) => evt.stopPropagation()}
        >
          <button type='button' title='Закрыть' className={styles.button} onClick={() => setIsOpen(false)}>
            <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
                fill='#FFFFFF'
              ></path>
            </svg>
          </button>
          <p>Loading...</p>
        </div>
      ) : data ? (
        <div
          className={isOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
          onClick={(evt) => evt.stopPropagation()}
        >
          <button type='button' title='Закрыть' className={styles.button} onClick={() => setIsOpen(false)}>
            <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
                fill='#FFFFFF'
              ></path>
            </svg>
          </button>
          <div>
            <p>id: {data.id}</p>
            <p>{data.title}</p>
          </div>
          <p>{data.body}</p>
        </div>
      ) : null}
    </div>
  );
}
