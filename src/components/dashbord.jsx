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

  const chartData = {
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

  const chartOptions = {
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

  const totalAmount = TransactionActivity.reduce((total, transaction) => total + transaction.Amount, 0);


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

    },

  ]




  return (

    <div style={{ marginLeft: '250px', marginTop: "40px" }}>
      <div style={{ display: 'flex', height: '65vh' }}>

        <div style={{ height: '100vh', width: '100vh' }}>
          <h4>Revenue Generated </h4>
          <h1 style={{ color: 'green' }}>{totalAmount} TND </h1>

          {TransactionActivity.length > 0 && <Line data={LinechartData} options={LinechartOptions} />}
        </div>

       <div>
          <h3 style={{marginTop:'15px'}}>Last Transactions</h3>
       
          <DataGrid
            style={{ height: '40vh', marginTop: '95px',width:'60vh' }}
            rows={LastTransaction}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
     </div>




      </div>

      <div style={{ display: 'flex', height: '65vh' }}>

        <div style={{ height: '100vh', width: '100vh' }}>
          <h4>Driver Activity</h4>
          {driverActivity.length > 0 ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <div>Loading...</div>
          )}      </div>
        <div style={{ height: '40vh', width: '40vh' }}>
          <h4>User Distribution</h4>
          <Doughnut data={pieChartData} />
        </div>
      </div>
    </div>
  );
};
