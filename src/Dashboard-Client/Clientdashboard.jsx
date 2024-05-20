import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ClientDashboard = () => {

    const [RidesCustomer, setRidesCustomer] = useState([]);

    const getRidesCustomer = async () => {
        try {
          const response = await axios.get('http://localhost:5000/client/getridesCustomer', {
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

return(
    
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>Welcome dasshboard</div>
)


}