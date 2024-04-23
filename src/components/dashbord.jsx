import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

Chart.register(...registerables);

export const Dashboard = () => {
  const [ratioData, setRatioData] = useState({ drivers: 0, customers: 0 });
  const [driverActivity, setDriverActivity] = useState([]);
  const [TransactionActivity, setTransactionActivity] = useState([]);
  const [LastTransaction, setLastTransaction] = useState([]);




  const getUserRatios = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getusercount', {
        withCredentials: true // Include cookies in the request
      });
      if (response.status === 200) {
        setRatioData(response.data.result);
        console.log('ratios', response.data.result)
      } else {
        console.log('Error:', response.statusText);
        alert('Error fetching user data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('failed fetching ratios');
    }
  };



  const getDriverActivity = async () => {
    try {
      const response = await axios.get('http://localhost:5000/driver-activity', {
        withCredentials: true
      });
      if (response.status === 200) {
        // Handle successful response
        setDriverActivity(response.data.result);
        console.log('activity', response.data.result)
      } else {
        console.log('Unexpected status code:', response.status);
        alert('Error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };




  const getTransactionActivity = async () => {
    try {
      const response = await axios.get('http://localhost:5000/TransactionActivity', {
        withCredentials: true
      });
      if (response.status === 200) {
        // Handle successful response
        setTransactionActivity(response.data.result);
        console.log('Transaction', response.data.result)
      } else {
        console.log('Unexpected status code:', response.status);
        alert('Error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };

  const GetLast10Transaction = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Last10Transaction', {
        withCredentials: true
      });
      if (response.status === 200) {
        setLastTransaction(response.data.result);
        console.log('last 10 transaction', response.data.result)
      } else {
        console.log('Unexpected status code:', response.status);           // Handle other status codes if needed
        alert('Error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);         // Handle network errors or other issues
      alert('Network error or other issue occurred');
    }
  };

  useEffect(() => {
    getDriverActivity();
    getUserRatios();
    getTransactionActivity();
    GetLast10Transaction();
  }, []);





  const totalusers = ratioData.drivers + ratioData.customers

  const BarchartData = {
    labels: driverActivity.map((driver) => new Date(2021, driver.Month - 1, 1).toLocaleString('default', { month: 'long' })),
    datasets: [
      {
        label: 'Rides Completed',
        data: driverActivity.map((driver) => driver.ridescompleted),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const BarchartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  const pieChartData = {
    labels: ['Customers', 'Drivers'],
    datasets: [
      {
        label: 'Users',
        data: [ratioData.customers, ratioData.drivers],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };



  const LinechartData = {
    labels: TransactionActivity.map((Transaction) => new Date(2021, Transaction.Month - 1, 1).toLocaleString('default', { month: 'long' })),
    datasets: [
      {
        label: 'Revenue',
        data: TransactionActivity.map((Transaction) => Transaction.Amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const LinechartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const totalAmount = parseFloat(TransactionActivity.reduce((total, transaction) => total + transaction.Amount, 0)).toFixed(3);



  const columns = [
    { field: 'id', headerName: 'ID Transaction', width: 90, sortable: false, disableColumnMenu: true },

    {
      field: 'FullName',
      headerName: 'Full name',
      width: 150,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,


    },

    {
      field: 'Date',
      headerName: 'Transaction Date',
      width: 150,
      sortable: false,
      disableColumnMenu: true,

    },
    {
      field: 'Amount',
      headerName: 'Amount',
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button  style={{ backgroundColor: '#36A2EB', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', width:'10vh'}}disabled>
          {params.value} TND
        </button>
      ),
    },
  ]




  return (

    <div style={{ marginLeft: '250px', }}>
      <h2>DASHBOARD</h2>
      <h5>Welcome to your dashboard</h5>
      <div style={{ display: 'flex', height: '65vh' }}>
        <div style={{ height: '65vh', width: '100vh', border: '1px solid #ddd', borderRadius: '5px', padding: '20px', marginRight: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
          <h4>Revenue Generated</h4>
          <h1 style={{ color: 'green' }}>{totalAmount} TND</h1>
          {TransactionActivity.length > 0 && <Line data={LinechartData} options={LinechartOptions} />}
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
          <h3>Last Transactions</h3>
          <DataGrid
            style={{ height: '50vh', marginTop: '70px', width: '60vh' }}
            rows={LastTransaction}
            columns={columns}
            hideFooterPagination
            pageSizeOptions={[5]}
          />
        </div>
      </div>
      <div style={{ display: 'flex', height: '60vh', marginTop: '20px' }}>
        <div style={{ height: '60vh', width: '100vh', border: '1px solid #ddd', borderRadius: '5px', padding: '20px', marginRight: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
          <h4>Driver Activity</h4>
          {driverActivity.length > 0 ? (
            <Bar data={BarchartData} options={BarchartOptions} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div style={{ height: '60vh', width: '65vh', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
          <div>
            <h4>User Distribution</h4>
            <Doughnut data={pieChartData} />
          </div>
        </div>
      </div>
    </div>

  );
};
