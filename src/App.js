import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { SignIn, SignUp } from './components/Authentification';
import{Sidebar} from './components/sidebar';

const App = () => {
  return (
    <Router>
      <Routes> 
       <Route path="/" element={<Sidebar />} /> 

      </Routes>
    </Router>
  );
};

export default App;
