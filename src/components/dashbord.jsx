import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart ,registerables } from 'chart.js';

Chart.register(...registerables);

export const Dashboard = () => {
 
  const [driverActivity, setDriverActivity] = useState([]);

  const getDriverActivity = async () => {
    try {
      const response = await axios.get('http://localhost:5000/driver-activity', {
        withCredentials: true
      });
      if (response.status === 200) {
        // Handle successful response
        setDriverActivity(response.data.result);
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
    getDriverActivity();
  }, []);
 
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


  return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>
      <div style={{height:'100vh', width:'100vh'}}>
      <h2>Driver Activity</h2>
      {driverActivity.length > 0 && <Bar data={chartData} options={chartOptions} />} 
      </div>
    </div>
  );
};
