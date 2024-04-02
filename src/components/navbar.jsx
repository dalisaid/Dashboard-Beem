
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
          window.location.href = '/';
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };
    
    return (
        <Navbar style={{ marginRight: '40px', marginBottom: '-90px', display: 'flex', justifyContent: 'space-between' }}>
            <Container>
                {/* Left side of the Navbar */}
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* Right side of the Navbar */}
                <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
                    <Nav.Link href="#link" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' ,marginBottom:'20px' }}>
                        <BsPersonFill style={{ marginRight: '5px' }} />
                        {email}
                    </Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown" style={{ marginRight: '100px', marginTop: '10px', marginBottom:'20px'}}>
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={disconnect}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
