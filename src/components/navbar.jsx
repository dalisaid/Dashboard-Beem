
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { faUser, faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



export const NavBar = () => {

    // State for storing email
  const [email, setEmail] = useState(null);


  const navigateRef = useRef();//i just wanted to use navigate man why did u have to make it so difficult -.-
  navigateRef.current = useNavigate();

  // Function to check connected user
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
        } 
        }
       catch (error) {
        // Network error or other issues
        console.error('Error:', error);
        alert('Error getting data from token. Redirecting to login page.');
       // window.location.href = '/';
       navigateRef.current('/');
       //window.location.assign('/');
      }
    };
    checkConnectedUser();
  }, []);





    // Function to disconnect user
  const disconnect = async () => {
    try {
      const response = await axios.get('http://localhost:5000/logout', {
        withCredentials: true
      });
      if (response){        // Handle the response, e.g., redirect to login page
      window.location.href = '/';
    }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement logic to toggle dark mode
  };

  return (
    <Navbar style={{ marginBottom: '-50px', display: 'flex', justifyContent: 'space-between',  marginLeft: '250px' }}>
      <Container>
      </Container>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <NavDropdown title={<span><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px', color: '1F384C' }} /> {email}</span>} id="basic-nav-dropdown" style={{ backgroundColor: 'white', marginRight: '10px', marginTop: '10px', marginBottom: '20px', borderRadius: '8px' }}>
            <NavDropdown.Item href="#action/3.1" style={{ color: 'black' }}>Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" style={{ color: 'black' }}>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={disconnect} style={{ color: 'black' }}>Log Out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" style={{ marginTop: '10px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            {/* Notification icon */}
            <FontAwesomeIcon icon={faBell} style={{ marginRight: '10px', color: 'black' }} />
            {/* Dark/Light mode icon */}
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} style={{ color: darkMode ? 'black' : 'black' }} onClick={toggleDarkMode} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
