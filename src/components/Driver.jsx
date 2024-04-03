import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
export const DriversTable = () => {
  /***************************************************************************** */
  const [DriverData, setDriverData] = useState([]);

useEffect(() => {
  const getDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getDrivers', {
        withCredentials: true
      });

      if (response.status === 200) {
        // Handle successful response
        setDriverData(response.data.result);
        
      } else {
        // Handle other status codes if needed
        console.log('Unexpected status code:', response.status);
        alert('error getting data from token');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };

  // Call the function when component mounts
  getDrivers();


}, []);
/***************************************************************** */
const data=DriverData;
const itemsPerPage=10;
// Pagination state
const [currentPage, setCurrentPage] = React.useState(1);

// Calculate total number of pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// Slice data to display only items for the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = data.slice(startIndex, endIndex);

// Handle page change
const handlePageChange = (page) => {
  setCurrentPage(page);
};







/***************************************************************** */


  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className="container" style={{ marginTop: '200px' }}>
      <h4 style={{ marginLeft: '190px', marginBottom: '-80px' }}>Drivers</h4>

      <div className="header" style={{ display: 'relative', justifyContent: 'space-between', width: '80%', marginTop: '100px', marginBottom: '-50px' }}>
        <Button onClick={handleShowModal} variant="primary">Add Driver</Button>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body>
            <h2>Add Driver</h2>
            <Form>
              <Table>
                <tbody>
                  <tr>
                    <td>ID:</td>

                
                    <td><Form.Control type="text" name="id" /></td>
                  </tr>
                  {/* Add more form fields as needed */}
                </tbody>
              </Table>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="success" type="submit">Save Changes</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>




      <div className="table-wrapper" style={{ width: '100%', marginLeft: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '60vh' }}>
      <Table hover style={{ width: '80%', textAlign: "left", padding: '10px', height: '100%', marginTop: '80px' }}>
  <thead>
    <tr>
      <th colSpan="6">
        <div className="d-flex align-items-center justify-content-end">
          <Form className="mt-3 mr-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '0.5rem', width: '250px', marginRight: '20px' }} />
          </Form>
          <Form className="mt-3 mr-3">
            <Form.Control as="select" className="filter-select" style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '0.5rem', width: '150px', backgroundColor: '#fff' }}>
              <option>Filter by City</option>
              <option>New York</option>
              <option>Los Angeles</option>
            </Form.Control>
          </Form>
        </div>
      </th>
    </tr>
    <tr>
      <th>id</th>
      <th>CIN</th>
      <th>fullName</th>
      <th>City</th>
      <th>Phone</th>
      <th>email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    { currentItems.map((driver, index) => (
      <tr key={index}>
        <td>{driver.id}</td>
        <td>{driver.CIN}</td>
        <td>{driver.fullName}</td>
        <td>{driver.city}</td>
        <td>{driver.phone}</td>
        <td>{driver.email}</td>
        <td className="fit">
          <span className="actions" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <BsFillTrashFill className="delete-btn" style={{ color: '#e10d05', marginRight: '5mm' }} />
            <Link to="/profil" style={{ textDecoration: 'none', color: 'black', marginRight: '1mm' }}>
              <BsFillPencilFill className="edit-btn" />
            </Link>
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
<Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      </div>




    </div>
  );
};