import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { SignIn, SignUp } from './components/Authentification';
import {  QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Sidebar } from './components/Sidebar';
import { DriversTable } from './components/Driver';
import { ClientsTable } from './components/Client';

const queryClient = new QueryClient();

const App = () => {

 
  return (
    <QueryClientProvider client={queryClient}>

    <Router>
      
      <Routes> 
       <Route path="/" element={   <SignIn  />} /> 
       <Route path="/SignUp" element={   <SignUp  />} />
       <Route path="/dashboard" element={   <Sidebar  />
      } />
        <Route path='/Drivers' element={ <><Sidebar  /> <DriversTable /></>} />
        <Route path='/Clients' element={ <><Sidebar  /> <ClientsTable /></>} />
      </Routes>
    </Router>
    <ReactQueryDevtools />
    </QueryClientProvider>

  );
};

export default App;
