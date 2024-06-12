'use client';
import { useContext } from 'react';
import { ModalContext } from '../../context/modal.context';
import ModalData from './ModalData';

export default function Modal(): JSX.Element {
  const { isOpen } = useContext(ModalContext);

  if (isOpen) {
    return <ModalData />;
  } else {
    return <></>;
  }
}
