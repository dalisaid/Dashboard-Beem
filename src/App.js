import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from './components/Authentification';
import { QueryClient, QueryClientProvider } from 'react-query';
import './css/App.css';
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
    
    <div style={{ }}>
   <QueryClientProvider client={queryClient}>
   <Router>
     <Routes>
       <Route path="/" element={<SignIn />} />
       <Route path="/SignUp" element={<SignUp />} />

       <Route
         path="/*"
         element={
           <div style={{ display: 'flex' }}>
             
             <Sidebar />
             <div style={{ flex: 1 }}>
             <NavBar />
               <Routes>
               
                 <Route path="/drivers" element={<DriversTable  />} />
                 <Route path="/Clients" element={<ClientsTable />} />
                 <Route path="/profil/:role/:userid" element={<ProfilDetails />} />
                 <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/transaction" element={<Transaction />} />
                 <Route path="/rides" element={<Rides />} />
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
