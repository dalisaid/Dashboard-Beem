import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#8a2be2', width: '15%', minHeight: '100vh', padding: '20px' }}>
      <h3 style={{ color: 'white', marginBottom: '20px' ,color:"orange" }}>Beem Dashboard</h3>
      {/* Add other sidebar content here */}
      <p style={{color: 'rgba(255, 255, 255, 0.5)' ,fontSize:" 17px", marginLeft:"50px"}}>MENU</p>
      <ul  style={{ listStyleType: 'none', padding: 0, textAlign:"center" }}>
        <li style={{ marginBottom: '10px' }}>
          <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Link 1</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Link 2</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

