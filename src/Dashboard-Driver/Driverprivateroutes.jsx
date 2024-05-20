import { Outlet, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import the ClipLoader spinner

const DriverPrivateRoutes = () => {
  const [tokenValidity, setTokenValidity] = useState(null);

  const validateToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/driver/validatetoken', {
        withCredentials: true,
      });

      if (response.status === 200) {
        setTokenValidity(response.data);
      } else {
        setTokenValidity({ token: false });
        alert('Please log in again');
      }
    } catch (error) {
      console.error('Error while validating token:', error);
      setTokenValidity({ token: false });
      alert('Error while validating token');
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  if (tokenValidity === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    );
  }

  return tokenValidity.token ? <Outlet /> : <Navigate to="/" />;
};

export default DriverPrivateRoutes;
