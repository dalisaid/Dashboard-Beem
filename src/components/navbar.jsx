
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




export const NavBar = () => {
  const [email, setEmail] = useState(null);




  useEffect(() => {
    const checkConnectedUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/connecteduser', {
          withCredentials: true
        });

        if (response.status === 200) {
          // Handle successful response
          setEmail(response.data.email);
          console.log('Connected user:', response.data.email);

        } else {
          // Handle other status codes if needed
          console.log('Unexpected status code:', response.status);
          alert('error getting data from token');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function when component mounts
    checkConnectedUser();

    // Optionally, you can add dependencies if needed
    // For example: [email]
  }, []);

  const disconnect = async () => {
    try {
      const response = await axios.get('http://localhost:5000/logout', {
        withCredentials: true
      });
      // Handle the response, e.g., redirect to login page
      if (response){
      window.location.href = '/';
    }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Navbar style={{marginBottom: '-50px', display: 'flex', justifyContent: 'space-between', marginTop:'10px', marginLeft: '200px' }}>
  <Container>
  </Container>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
      <Nav.Link href="#link" style={{ marginTop: '10px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>

      </Nav.Link>
      <NavDropdown title={<span><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px', color: 'black' }} /> {email}</span>} id="basic-nav-dropdown" style={{ backgroundColor: 'white', marginRight: '100px', marginTop: '10px', marginBottom: '20px', borderRadius: '8px' }}>
        <NavDropdown.Item href="#action/3.1" style={{ color: 'black' }}>Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" style={{ color: 'black' }}>Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={disconnect} style={{ color: 'black' }}>Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}
