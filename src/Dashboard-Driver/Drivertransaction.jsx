import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from '../components/DataTable';

export const DriverTransaction = () => {


    const [DriverTransaction, setDriverTransaction] = useState([]);

    const getDriverTransaction= async () => {
      try {
        const response = await axios.get('http://localhost:5000/driver/getDriverTransaction', {
          withCredentials: true
        });
        if (response.status === 200) {
            setDriverTransaction(response.data.result);
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
        getDriverTransaction();
    }, []);
    
    console.log('rides:',DriverTransaction)



    const columns = [
        { field: 'DriverID', headerName: 'DriverID', width: 90 },
        { field: 'fullName', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150, flex: 1 },
        { field: 'Amount', headerName: 'Amount', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
        { field: 'TransactionDate', headerName: 'TransactionDate', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
    ];

return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>

        <h1>Transaction</h1>

        <div>
          <DataTable rows={DriverTransaction} columns={columns}  />
        </div>













        
    </div>
)


}