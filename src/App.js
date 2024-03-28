import React, { useState } from 'react';
import './App.css';
import { ClientTable } from './components/client';
import { Modal } from './components/modal'; 
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App'>
      <ClientTable openModal={() => setModalOpen(true)} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add Client
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