import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from '../components/DataTable';

export const RidesClient = () => {


    const [RidesCustomer, setRidesCustomer] = useState([]);

    const getRidesCustomer = async () => {
        try {
          const response = await axios.get('http://localhost:5000/getridesCustomer', {
            withCredentials: true
          });
          if (response.status === 200) {
            setRidesCustomer(response.data.result);
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
        getRidesCustomer();
      }, []);
      
    
    console.log('rides:',RidesCustomer)



    const columns = [
        { field: 'CustomerID', headerName: 'CustomerID', width: 90 },
        { field: 'fullName', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150, flex: 1 },
        { field: 'StartLatitude', headerName: 'StartLatitude', width: 150 },
        { field: 'StartLongitude', headerName: 'StartLongitude', width: 150 },
        { field: 'DestinationLatitude', headerName: 'DestinationLatitude', width: 110, headerAlign: 'left', align: 'left', flex: 1 },
        { field: 'DestinationLongitude', headerName: 'DestinationLongitude', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
        { field: 'DateRides', headerName: 'DateRides', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
    ];

return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>

        <h1>Rides</h1>

        <div>
          <DataTable rows={RidesCustomer} columns={columns}  />
        </div>













        
    </div>
)


}