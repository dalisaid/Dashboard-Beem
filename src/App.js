import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from './components/Authentification';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Sidebar } from './components/Sidebar';
import { DriversTable } from './components/Driver';
import { ClientsTable } from './components/Client';
import { ProfilDetails } from './components/profil';
import { Dashboard } from './components/dashbord';
import { NavBar } from './components/navbar';
import { Transaction } from './components/transaction';
import { Rides } from './components/rides';


const queryClient = new QueryClient();

const App = () => {

  return (
    /************************ 
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Drivers"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <Sidebar />
                  <div style={{ marginLeft: '100px', flexGrow: 1, marginTop: '100px' }}>
                    <DriversTable />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/Clients"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <Sidebar />
                  <div style={{ marginLeft: '100px', flexGrow: 1, marginTop: '100px' }}>
                    <ClientsTable />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/profil"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <div style={{ display: 'flex' }}>
                  <Sidebar />
                  <div style={{ marginLeft: '240px', flexGrow: 1 }}>
                    <ProfilDetails />
                  </div>
                </div>
              </div>
            }
            
          />
          <Route
            path="/dashboard"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <Sidebar />

                <Dashboard />
              </div>
            }
          />

          <Route
            path="/transaction"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <Sidebar />
                  <div style={{ marginLeft: '100px', flexGrow: 1, marginTop: '100px' }}>
                    <Transaction />
                  </div>
                </div>
              </div>
            }
          />

          <Route
            path="/rides"
            element={
              <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavBar />
                <Sidebar />

                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <div style={{ marginLeft: '100px', flexGrow: 1, marginTop: '100px' }}>
                    <Rides />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>


      </Router>

 
    </QueryClientProvider>
   /************************/
    
   <QueryClientProvider client={queryClient}>
   <Router>
<Routes>
  <Route path="/" element={<SignIn />} />
  <Route path="/SignUp" element={<SignUp />} />


  <Route
    path="/*"
    element={
      <>
        <NavBar />
        <Sidebar/>
        <Routes>
          <Route path="/Drivers" element={<DriversTable />} />
          <Route path="/Clients" element={<ClientsTable />} />
          <Route path="/profil" element={<ProfilDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/rides" element={<Rides />} />
        </Routes>
      </>
    }
  />
</Routes>
</Router>
    
  </QueryClientProvider>


  
  );
};

export default App;
