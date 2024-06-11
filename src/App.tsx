import './App.css';
import Modal from './components/Modal/Modal';
import { Service } from './components/Service/Service';
import { ModalContextProvider } from './context/modal.context';

function App() {
  return (
    <ModalContextProvider>
      <Service />
      <Modal />
    </ModalContextProvider>
  );
}

export default App;
