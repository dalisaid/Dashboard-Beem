import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const  NavBar =() =>{


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 


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

  const [userData, setUserData] = useState([]);

  const getAdmin = async () => {
    try {
      const response = await fetch('http://localhost:5000/admin', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.result.length > 0) {
          setUserData(data.result[0]);
          console.log(userData)
        }
      } else {
        console.error('Failed to fetch admin data:', response.statusText);
        alert('Error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };

  useEffect(() => {
    getAdmin();
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
<AppBar position="static" style={{ background: "#eee" }}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexGrow: 1 }}>
      </Box>
      <Tooltip title="Account settings">
     
      </Tooltip>
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} style={{ color: darkMode ? 'black' : 'black' }} onClick={toggleDarkMode} />

      <Tooltip title="Notifications">
        <IconButton size="large" sx={{ ml: 2 }} style={{marginLeft:'50px'}}>
        <Badge badgeContent={2} color="error">
          <NotificationsIcon />
          </Badge>

        </IconButton>
        
      </Tooltip>

      <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 1 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          style={{marginLeft:'30px'}}
        >
            <Avatar sx={{ width: 55, height: 55 }} > {userData.firstName ? userData.firstName[0] : ""}</Avatar>
        </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />  {userData.firstName} {userData.lastName}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> {email}
        </MenuItem>
        <Divider />
       
        <MenuItem onClick={handleClose} component={Link} to="/settings">
  <ListItemIcon>
    <Settings fontSize="small" />
  </ListItemIcon>
  Settings
</MenuItem>

        <MenuItem onClick={disconnect}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon >
          Logout
        </MenuItem>
      </Menu>
    </Toolbar>
  </Container>
</AppBar>  

  );
}
