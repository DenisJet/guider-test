'use client';
import { useContext } from 'react';
import styles from './Button.module.css';
import { ModalContext } from '../../context/modal.context';

type ButtonProps = {
  className?: string;
};

export default function Button({ className }: ButtonProps): JSX.Element {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <button className={`${styles.button} ${className}`} type='button' onClick={() => setIsOpen(true)}>
      Оставить заявку
    </button>
  );
}
