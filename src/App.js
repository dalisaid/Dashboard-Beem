import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Authentification} from "./components/Authentification";
import { DriversTable } from './components/Drivers';
const App = () => {
  return (
    <div className='App'>
   <DriversTable></DriversTable>
    </div>
  );
};

export default App;

