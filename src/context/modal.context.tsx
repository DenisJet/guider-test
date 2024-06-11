import { createContext, ReactNode, useState } from 'react';

export type ModalContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};
