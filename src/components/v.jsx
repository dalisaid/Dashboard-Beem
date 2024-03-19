import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { SignIn, SignUp } from './components/Authentification';
import{Dashboard} from './components/dashboard';

const App = () => {
  return (
    <Router>
      <Routes> 
       <Route path="/" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 

      </Routes>
    </Router>
  );
};

export default App;
