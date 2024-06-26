import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Statistique } from './statistic';
import { Statistic, Space, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { DataTable } from '../components/DataTable';

import { AddModal } from '../components/modal';


import {SearchInput} from '../components/SearchInput';


import {AddButton} from '../components/AddButton';




export const DriversTable = () => {


  // State for storing driver data
  const [DriverData, setDriverData] = useState([]);
  let today = new Date();



  // Function to fetch driver data from server

  const getDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getDrivers', {
        withCredentials: true
      });
      if (response.status === 200) {
        setDriverData(response.data.result);
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
    getDrivers();
    today = new Date(); // Call the function to fetch drivers
  }, []);





  // State for search input
  const [search, setsearch] = useState('');

  // Search
  const filteredItems = DriverData.filter((driver) => {
    return search.toLowerCase() === '' ? driver : String(driver.id).includes(search) ||
      String(driver.CIN).includes(search) ||
      driver.fullName.includes(search) ||
      driver.city.includes(search) ||
      String(driver.phone).includes(search) ||
      driver.email.includes(search);
  });




  // State for form data
  const [formData, setFormData] = useState({

    CIN: '',
    fullName: '',
    gender: '',
    city: '',
    phone: '',
    email: '',
    password: ''
  });



  // Handle form submission to add a new driver
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData:', formData); // Log formData before making the request
    try {
      const response = await axios.post('http://localhost:5000/addDriver', formData, {
        withCredentials: true // Ensure credentials are included in the request
      });
      console.log('Response:', response.data); // Log the response from the server
      handleCloseModal();
      getDrivers();
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };



  // Delete driver function

  const handleDeletedriver = async (driverId) => {
    try {
      await axios.delete(`http://localhost:5000/deleteDriver/${driverId}`, {        // Send a DELETE request to the server to delete the driver
        withCredentials: true // Ensure credentials are included in the request
      });
      setDriverData((prevDriverData) => prevDriverData.filter(driver => driver.id !== driverId));      // Remove the deleted driver from the local state
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };


  // State and functions for modal
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  // Function to get total count of drivers
  /*
  
  */
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'CIN', headerName: 'CIN', width: 150 },
    { field: 'fullName', headerName: 'Full name', width: 150, flex: 1 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'phone', headerName: 'Phone', type: 'number', width: 110, headerAlign: 'left', align: 'left', flex: 1 },
    { field: 'email', headerName: 'Email', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
    { field: 'CreationDate', headerName: 'CreationDate', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <BsFillTrashFill className="delete" style={{ color: '#e10d05', marginRight: '5mm' }} onClick={() => handleDeletedriver(params.row.id)} />
      ),
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/admin/profil/${role}/${params.row.id}`} style={{ textDecoration: 'none', color: 'black', marginRight: '1mm' }}>
          <BsFillPencilFill className="edit-btn" />
        </Link>
      ),
    },
  ];

  const getTotalDriversCount = () => {
    return DriverData.length;
  };

  const role = 'Drivers';
  return (


    <div style={{ marginLeft: '250px', marginTop: "40px" }}>

     {/** <Statistique /> */}


      <Box sx={{ height: 100, width: '95%', marginTop: "20px" }}>
        <h1>Drivers</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <AddButton onClick={handleShowModal} text="Add Driver" />

          {/** 
          <Button
            onClick={handleShowModal}
            style={{
              padding: "10px 22px",
              backgroundColor: "#584cac",
              borderRadius: "6px",
              color: "#fff",
              border: "none",
              fontSize: "18px",
              fontWeight: "400",
              cursor: "pointer",
              boxShadow: "0 5px 10px black rgba(0,0,0,0.1)",
              marginTop: '10px'
            }}
          >
            Add Driver
          </Button>
*/}
          <SearchInput value={search} onChange={(e) => setsearch(e.target.value)} />

          {/** 
          <Form className="mt-3 mr-3">
            <div style={{ position: 'relative' }}>
              <FormControl
                type="text"
                placeholder="Search"
                style={{
                  borderRadius: '20px',
                  width: '350px',
                }}
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </Form>
          */}
        </div>

        <div>
          <DataTable rows={filteredItems} columns={columns} handleDeletedriver={handleDeletedriver} role={role} />
        </div>
        {/*
        <Box sx={{ height: 750, width: '100%', marginTop: '10px' }}>
          <DataGrid
            rows={filteredItems}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 12,
                },
              },
            }}
            
            checkboxSelection
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar  }} />
        </Box>
        */}
        <AddModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          buttonLabel="Save Changes"

        />
        {/**
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center' }}>Add Driver</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="id">
              <Form.Label>CreationDate</Form.Label>
              <Form.Control type="text" name="date" value={today} readOnly />
            </Form.Group>
              <Form.Group controlId="CIN">
                <Form.Label>CIN</Form.Label>
                <Form.Control type="text" name="CIN" value={formData.CIN} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group controlId="gender">
  <Form.Label>Gender</Form.Label>
  <div>
    <Form.Check
      inline
      type="radio"
      label="Male"
      name="gender"
      value="Male"
      checked={formData.gender === "Male"}
      onChange={handleChange}
      required
    />
    <Form.Check
      inline
      type="radio"
      label="Female"
      name="gender"
      value="Female"
      checked={formData.gender === "Female"}
      onChange={handleChange}
      required
    />
 
  </div>
</Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange}required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} style={{ marginBottom: '20px' }} required/>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} style={{ marginBottom: '20px' }}required />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="success" type="submit">Add driver</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
         */}
      </Box>
    </div>
  );
};