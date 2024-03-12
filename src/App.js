import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Authentification} from "./components/Authentification";

const App = () => {
  return (
    <div className='App'>
   <Authentification></Authentification>
    </div>
  );
};

export default App;

