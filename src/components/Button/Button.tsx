'use client';
import { useContext } from 'react';
import styles from './Button.module.css';
import { ModalContext } from '../../context/modal.context';

export default function Button(): JSX.Element {
  const { setIsOpen } = useContext(ModalContext);

  return (
    <button className={styles.button} type='button' onClick={() => setIsOpen(true)}>
      Подробнее →
    </button>
  );
}
