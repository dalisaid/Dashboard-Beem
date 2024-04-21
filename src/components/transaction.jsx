import React, { useState, useEffect } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';




export const Transaction = () => {

  const [TransactionData, setTransactionData] = useState([]);


  /************************************************************** */


  const getTransaction = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getTransaction', {
        withCredentials: true
      });
      if (response.status === 200) {
        setTransactionData(response.data.result);
        // Handle successful response
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
    getTransaction();     // Call the function to fetch drivers
  }, []);

  console.log(`Transaction`, TransactionData)

  const columns = [
    {
      field: 'id', headerName: 'TransactionID', width: 90, flex: 1
    },

    {
      field: 'DriverID',
      headerName: 'DriverID',
      width: 150,
     

    },
    {
      field: 'DriverFullName',
      headerName: 'DriverFullName',
      width: 150,
      flex: 1

    },
    {
      field: 'Amount',
      headerName: 'Amount',
      width: 150,
      flex: 1

    },

    {
      field: 'TransactionDate',
      headerName: 'TransactionDate',
      headerAlign: 'left',
      align: 'left',
      width: 160,
      flex: 1
    }




  ];




  return (
    <div style={{ marginLeft: '250px', marginTop: "120px" }}>

      <Box sx={{ height: 100, width: '95%', marginTop: "20px" }}>
        <h1>Transaction</h1>


        <Box sx={{ height: 750, width: '100%', marginTop: '10px' }}>
          <DataGrid
            rows={TransactionData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }} />
        </Box>
      </Box>

    </div>



  );






}