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

 import {SidebarClient} from './Dashboard-Client/ClientSidebar'
 import {RidesClient} from './Dashboard-Client/ridesClient'
 import {SettingsClient} from './Dashboard-Client/SettingsClient'
 import {DashboardClient} from './Dashboard-Client/dashboardClient'




const queryClient = new QueryClient();

const App = () => {

  return (


    
    <div style={{ }}>

    <QueryClientProvider client={queryClient}>
    
   <Router>
     <Routes>
       <Route path="/" element={<SignIn />} />
       <Route path="/SignUp" element={<SignUp />} />
     {/**
       <Route
         path="/*"
         element={
           <div style={{ display: 'flex' }}>
             
             <SidebarClient  />
             <div style={{ flex: 1 }}>
             <NavBar />
             
               <Routes>
               
               <Route path="/dashboardclient" element={<DashboardClient/>} />
                 <Route path="/ridesClient" element={<RidesClient />} />
                 <Route path="/settingsClient" element={<SettingsClient/>} />

                 
               </Routes>
             </div>
           </div>
         }
       />

       </Routes>
   </Router>
      */}

       <Route
         path="/*"
         element={
           <div style={{ display: 'flex' }}>
             
             <Sidebar  />
             <div style={{ flex: 1 }}>
             <NavBar />
             
               <Routes>
               
                 <Route path="/drivers" element={<DriversTable  />} />
                 <Route path="/Clients" element={<ClientsTable />} />
                 <Route path="/profil/:role/:userid" element={<ProfilDetails />} />
                 <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/transaction" element={<Transaction />} />
                 <Route path="/rides" element={<Rides />} />
                 <Route path="/settings" element={<Settings/>} />
                 <Route path="/account" element={<Account/>} />

                 

      
               </Routes>
             </div>
           </div>
         }
       />
    
     </Routes>
   </Router>

          
 </QueryClientProvider>
   
 </div>
    
  );
};

export default App;
