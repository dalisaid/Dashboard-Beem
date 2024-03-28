import React, { useState } from 'react';
import './App.css';
import { DriversTable } from './components/Drivers';
import { Modal } from './components/modal'; 
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App'>
      <DriversTable openModal={() => setModalOpen(true)} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add Driver
      </button>
      {modalOpen && <Modal
        closeModal={() => {
          setModalOpen(false);
        }}
      />}
    </div>
  );
};

export default App;
