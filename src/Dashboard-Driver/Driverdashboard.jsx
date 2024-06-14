import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../components/Card';
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { DataGrid } from '@mui/x-data-grid';

export const DashboardDriver = () => {


  const [rides, setRides] = useState({ TotalRidesCompleted: 0 });
  const [driverActivity, setDriverActivity] = useState([]);
  const [LastTransaction, setLastTransaction] = useState([]);
  const [LastRides,setLastRides]=useState([]);

  const getChartData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/driver/Chartdata', {
        withCredentials: true,
      });
  
      if (response.status === 200) {
        const ridesCompleted = response.data.RidesCompleted.TotalRidesCompleted || 0;
        const ridesPerMonth = response.data.ridesmonth || [];
        const lastTransactions = response.data.last5Transactions || [];
        const LastRides = response.data.lastRides || [];

  
        setRides({ TotalRidesCompleted: ridesCompleted });
        setDriverActivity(ridesPerMonth);
        setLastTransaction(lastTransactions); // Update state with last transactions data
        setLastRides(LastRides); // Update state with last transactions data

        // Now log LastTransaction after it has been updated
      } else {
        console.log('Unexpected status code:', response.status);
        alert('Error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };
  
  useEffect(() => {
    getChartData();
  }, []);
  
  console.log("last rides :", LastRides); 
  

  const BarchartData = {
    labels: driverActivity.map((driver) =>
      new Date(2021, driver.Month - 1, 1).toLocaleString('default', { month: 'long' })
    ),
    datasets: [
      {
        label: 'Rides Completed',
        data: driverActivity.map((driver) => driver.TotalRides),
        backgroundColor: 'rgba(68, 24, 121, 0.2)',
        borderColor: 'rgba(68, 24, 121, 1)',
        borderWidth: 1,
      },
    ],
  };

  const BarchartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartData = {
    labels: ['Rides Completed'],
    datasets: [
      {
        label: 'Rides Completed',
        data: [rides.TotalRidesCompleted],
        backgroundColor: [
          'rgba(68, 24, 121, 0.4)',
          'rgba(225, 70, 8, 0.4)',
        ],
        hoverBackgroundColor: [
          'rgba(68, 24, 121, 0.8)',
          'rgba(225, 70, 8, 0.8)'
        ]
      },
    ],
  };
  const columnsTransaction = [
    { field: 'Date', headerName: 'Transaction Date', width: 180, sortable: false, disableColumnMenu: true },
    {
      field: 'Amount',
      headerName: 'Amount',
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button style={{ backgroundColor: 'var(--blue)', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }} disabled>
          {params.value} TND
        </button>
      ),
    },
  ];
  
  const columnsRides = [
    { field: 'StartLatitude', headerName: 'StartLatitude', width: 180, sortable: false, disableColumnMenu: true },
    {
      field: 'StartLongitude',
      headerName: 'StartLongitude',
      width: 150,
      sortable: false,
      disableColumnMenu: true,
     
    },
    {
      field: 'DestinationLatitude',
      headerName: 'DestinationLatitude',
      width: 150,
      sortable: false,
      disableColumnMenu: true,
     
    },
    {
      field: 'Date',
      headerName: 'Date',
      width: 150,
      sortable: false,
      disableColumnMenu: true,
     
    },
  ];


  return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>
     
       
     <div style={{ display: 'flex', height: '65vh' }}>
  <div style={{ height: '65vh', width: '100vh', border: '1px solid #ddd', borderRadius: '5px', padding: '20px', marginRight: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
    <h4>Driver Activity</h4>
    {/* Assuming BarchartData and BarchartOptions are defined elsewhere */}
    <Bar data={BarchartData} options={BarchartOptions} />
  </div>

  <div style={{ border: '1px solid #ddd',width: '100vh', borderRadius: '5px', padding: '40px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', flex: '1' }}>
    <h3>Last Transactions</h3>
    <DataGrid
      style={{ height: '50vh', marginTop: '20px', width: '100%' }}  // Adjust width here
      rows={LastTransaction}
      columns={columnsTransaction}
      hideFooterPagination
      pageSizeOptions={[5]}
    />
  </div>
</div>





  <div style={{ display: 'flex', height: '65vh' }}>

      <div style={{ height: '60vh', width: '65vh', marginRight: '20px', marginTop:'10px',width: '100vh', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        <div>
          <h4>Rides Completed</h4>
          <Doughnut data={pieChartData} />
        </div>
      </div>
      
      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '40px',  marginTop:'10px',boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' ,width: '100vh',}}>
    <h3>Last Rides</h3>
    <DataGrid
      style={{ height: '50vh', marginTop: '20px', width: '100%' }}
      rows={LastRides}
      columns={columnsRides}
      hideFooterPagination
      pageSizeOptions={[5]}
    />
  </div>
    </div>
    </div>
     
  );
};
