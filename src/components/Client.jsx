import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { orderBy } from 'lodash';
import Modal from 'react-bootstrap/Modal';
import { Statistic, Space, Card } from 'antd'; // Import Typography and Space from Ant Design
import { UserOutlined } from '@ant-design/icons'; // Import UserOutlined from Ant Design
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';






export const ClientsTable = () => {

  // Modal logic
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  let today = new Date();

  // Form data state
  const [formData, setFormData] = useState({
    CIN: '',
    fullName: '',
    gender:'',
    city: '',
    phone: '',
    email: '',
    password:''
  });



  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  // Handle form submission for add a driver
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData:', formData); // Log formData before making the request

    try {
      const response = await axios.post('http://localhost:5000/addCustomer', formData, {
        withCredentials: true // Ensure credentials are included in the request
      });
      console.log('Response:', response.data); // Log the response from the server

      handleCloseModal();
      getCustomers();
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };


  // State for storing customer data
  const [CustomerData, setCustomerData] = useState([]);



  // Fetch customer data from the server
  const getCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getCustomers', {
        withCredentials: true
      });

      if (response.status === 200) {                   // Handle successful response
        setCustomerData(response.data.result);

      } else {
        console.log('Unexpected status code:', response.status);            // Handle other status codes if needed
        alert('error getting data from token');
      }
    } catch (error) {
      console.error('Error:', error);          // Handle network errors or other issues
      alert('Network error or other issue occurred');
    }
  };
  useEffect(() => {
    getCustomers();     // Call the function when component mounts
  }, []);



  // Delete a customer
  const handleDeleteCustomer = async (CustomerId) => {
    try {
      await axios.delete(`http://localhost:5000/deleteCustomer/${CustomerId}`, {        // Send a DELETE request to the server to delete the driver
        withCredentials: true // Ensure credentials are included in the request
      });
      setCustomerData(CustomerData.filter(Customer => Customer.id !== CustomerId));       // Remove the deleted driver from the local state
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };



  // Search
  const [search, setsearch] = useState('');
  const filteredItems = CustomerData.filter((Customer) => {
    return search.toLowerCase() === '' ? Customer : String(Customer.id).toLowerCase().includes(search) ||
      String(Customer.CIN).toLowerCase().includes(search) ||
      Customer.fullName.toLowerCase().includes(search) ||
      Customer.city.toLowerCase().includes(search) ||
      String(Customer.phone).toLowerCase().includes(search) ||
      Customer.email.toLowerCase().includes(search);
  });




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
      flex: 1

    },
    {
      field: 'gender',
      headerName: 'Gender',
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
      headerAlign: 'left',
      align: 'left',
      flex: 1

    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'left',
      align: 'left',
      width: 160,
      flex: 1

    },
     {
      field: 'CreationDate',
      headerName: 'CreationDate',
      headerAlign: 'left',
      align: 'left',
      width: 160,
      flex: 1

    },

    
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (

        <BsFillTrashFill className="delete" style={{ color: '#e10d05', marginRight: '5mm' }} onClick={() => handleDeleteCustomer(params.row.id)} />
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


  // Get total number of customers
  const getTotalCustomersCount = () => {
    return CustomerData.length;
  };


  const role = 'Customers';

  return (



    <div style={{ marginLeft: '250px', marginTop: "6px" }}>
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
      <Box sx={{ height: 100, width: '95%', marginTop: "20px" }}>
        <h1>Customers</h1>
        <div>
          <Space size={20}>
            <Card className="custom-card">
              <Space direction='horizontal'>
                <UserOutlined style={{ fontSize: '28px', color: 'purple', marginBottom: '10px', backgroundColor: "rgba(255,0, 255, 0.25)", borderRadius: 20, padding: 8 }} />
                <Statistic title="Total Number of Customers" value={getTotalCustomersCount()} />
              </Space>
            </Card>
          </Space>
        </div>
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
            marginTop: '10px'
          }}
        >
          Add Customer
        </Button>
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
            slots={{ toolbar: GridToolbar }} />
        </Box>
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
                <Button variant="success" type="submit">Add customer</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Box>
    </div>


  );

}