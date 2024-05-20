import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from './Dashboard-Admin/Authentification';

import { QueryClient, QueryClientProvider } from 'react-query';
import './css/App.css';



import { Sidebar } from './Dashboard-Admin/AdminSidebar';
import { DriversTable } from './Dashboard-Admin/Driver';
import { ClientsTable } from './Dashboard-Admin/Client';
import { ProfilDetails } from './Dashboard-Admin/profil';
import { Dashboard } from './Dashboard-Admin/dashbord';
import { NavBar } from './Dashboard-Admin/navbar';
import { Transaction } from './Dashboard-Admin/transaction';
import { Rides } from './Dashboard-Admin/rides';
import {Settings} from './Dashboard-Admin/settings'
import {Account} from './Dashboard-Admin/account'



import { ClientSignIn,ClientSignUp } from './Dashboard-Client/Clientauthentification';
 import {ClientSidebar} from './Dashboard-Client/ClientSidebar'
 import {ClientRides} from './Dashboard-Client/Clientrides'
 import {ClientSettings} from './Dashboard-Client/ClientSettings'
 import {ClientDashboard} from './Dashboard-Client/Clientdashboard'
import { ClientNavBar } from './Dashboard-Client/Clientnavbar';

 import { DriverSidebar } from './Dashboard-Driver/DriverSidebar';
 import { DriverSettings } from './Dashboard-Driver/DriverSettings';
 import { DriverNavBar } from './Dashboard-Driver/Drivernavbar';
 import { DriverSignIn } from './Dashboard-Driver/Driverauthentification';



import AdminPrivateRoutes from './Dashboard-Admin/Adminprivateroutes';
import ClientPrivateRoutes from './Dashboard-Client/Clientprivateroutes';
import DriverPrivateRoutes from './Dashboard-Driver/Driverprivateroutes';

const queryClient = new QueryClient();

const App = () => {

  return (
    <div style={{}}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<DriverSignIn />} />
            <Route path="/ClientSignIn" element={<ClientSignIn />} />
            <Route path="/AdminSignIn" element={<SignIn />} />
            <Route path="/DriverSignin" element={<DriverSignIn />} />

            



            {/* Client routes */}
            <Route element={<ClientPrivateRoutes/>}>
            <Route
              path="/client/*"
              element={
                <div style={{ display: 'flex' }}>
                  <ClientSidebar />
                  <div style={{ flex: 1 }}>
                    <ClientNavBar />
                    <Routes>
                      <Route path="Clientdashboard" element={<ClientDashboard />} />
                      <Route path="Clientrides" element={<ClientRides />} />
                      <Route path="Clientsettings" element={<ClientSettings />} />
                    </Routes>
                  </div>
                </div>
              }
            />
            </Route>


            {/* Client routes */}
            <Route element={<DriverPrivateRoutes/>}>
            <Route
              path="/driver/*"
              element={
                <div style={{ display: 'flex' }}>
                  <DriverSidebar />
                  <div style={{ flex: 1 }}>
                    <DriverNavBar />
                    <Routes>
                    <Route path="driverdashboard" element={<p>wip</p>} />
                      
                      <Route path="driversettings" element={<DriverSettings />} />
                    </Routes>
                  </div>
                </div>
              }
            />
            </Route>

            {/* Admin routes */}
            <Route element={<AdminPrivateRoutes/>}>
            <Route
              path="/admin/*"
              element={
                <div style={{ display: 'flex' }}>
                  <Sidebar />
                  <div style={{ flex: 1 }}>
                    <NavBar />
                    <Routes>
                      <Route path="drivers" element={<DriversTable />} />
                      <Route path="Clients" element={<ClientsTable />} />
                      <Route path="profil/:role/:userid" element={<ProfilDetails />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="transaction" element={<Transaction />} />
                      <Route path="rides" element={<Rides />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="account" element={<Account />} />
                    </Routes>
                  </div>
                </div>
              }
            />
            </Route>

          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
  
};

export default App;
