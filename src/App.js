import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { SignIn, SignUp } from './components/Authentification';
import {  QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {

 
  return (
    <QueryClientProvider client={queryClient}>

    <Router>
      <Routes> 
       <Route path="/" element={   <SignIn  />} /> 
       <Route path="/SignUp" element={   <SignUp  />} />

      </Routes>
    </Router>
    <ReactQueryDevtools />
    </QueryClientProvider>

  );
};

export default App;
