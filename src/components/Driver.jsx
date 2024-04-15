import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import {  Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import { Statistic, Space, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';







export const DriversTable = () => {


  // State for storing driver data
  const [DriverData, setDriverData] = useState([]);



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
    getDrivers();     // Call the function to fetch drivers
  }, []);





  // State for search input
  const [search, setsearch] = useState('');

  // Search
  const filteredItems = DriverData.filter((driver) => {
    return search.toLowerCase() === '' ? driver : String(driver.id).toLowerCase().includes(search) ||
      String(driver.CIN).toLowerCase().includes(search) ||
      driver.fullName.toLowerCase().includes(search) ||
      driver.city.toLowerCase().includes(search) ||
      String(driver.phone).toLowerCase().includes(search) ||
      driver.email.toLowerCase().includes(search);
  });



  
  // State for form data
  const [formData, setFormData] = useState({
    id: '',
    CIN: '',
    fullName: '',
    city: '',
    phone: '',
    email: ''
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


 const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'CIN',
    headerName: 'CIN',
    width: 150,
    
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 150,
    
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    
  },
  {
    field: 'email',
    headerName: 'Email',
     
    width: 160,
    
  },
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
      
      <Link to={`/profil/${role}/${params.row.id}`} style={{ textDecoration: 'none', color: 'black', marginRight: '1mm' }}>
      <BsFillPencilFill className="edit-btn" />
    </Link>
    ),
  },


];




  const getTotalDriversCount = () => {
    return filteredItems.length;
  };

  const role='Drivers';
  return (

    <div className="container-" style={{
      width: "80%",
      height: "auto",
      marginLeft: "14%",
      marginRight: "auto",
      marginTop: "190px",
      boxShadow: "0 .4rem .8rem #0005",
      borderRadius: ".8rem",
      overflow: "hidden",
      padding: "20px"   
    }}>

      <section
        className="table__header"
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: "#fff4",
          padding: ".8rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>Drivers</h1>
        <Form className="mt-3 mr-3">
          <div style={{ position: 'relative' }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-input"
              style={{
                border: '1px solid #ced4da',
                borderRadius: '25px', // Adding border radius
                padding: '0.5rem 2rem 0.5rem 1rem', // Adjusting padding for the icon
                width: '350px',
                marginRight: '20px'
              }}
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <img
              src="./img/search.png"
              alt="Search"
              style={{
                position: 'absolute',
                top: '50%',
                right: '30px',
                transform: 'translateY(-50%)',
                width: '1.5rem', // Adjust icon size as needed
                height: 'auto'
              }}
            />
          </div>
        </Form>
      </section>
      <div>

        <Space style={{ marginTop: '20px', marginLeft: '20px' }} size={20}>
          <Card className="custom-card">
            <Space direction='horizontal'>
              <UserOutlined style={{ fontSize: '28px', color: 'purple', marginBottom: '10px', backgroundColor: "rgba(255,0, 255, 0.25)", borderRadius: 20, padding: 8 }} />
              <Statistic title="Total Number of Drivers" value={getTotalDriversCount()} />
            </Space>
          </Card>
        </Space>






      </div>
      <div className="table_body" style={{
         width: "95%",
         maxHeight: "calc(89% - 1.6rem)",
         backgroundColor: "#fffb",
         margin: ".8rem auto",
         borderRadius: ".6rem",
         overflow: "auto",
         overflowY: "overlay"
      }}>
        <Button
                  onClick={handleShowModal}

                  style={{
                    position: "relative",
                    padding: "10px 22px",
                    backgroundColor: "#584cac",
                    borderRadius: "6px",
                    color: "#fff",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor: "pointer",
                    boxShadow: "0 5px 10px black rgba(0,0,0,0.1)",

                  }}
                >
                  Add Driver
                </Button>

<Box sx={{ height: 400, width: '100%' }}>
  
      <DataGrid 
        rows={filteredItems}
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
        slots={{ toolbar: GridToolbar }}/>
    </Box>
   
      </div>
        
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' }}>Add Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" name="id" value={formData.id} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="CIN">
              <Form.Label>CIN</Form.Label>
              <Form.Control type="text" name="CIN" value={formData.CIN} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
              <Button variant="success" type="submit">Save Changes</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

    </div>
   
  );
};