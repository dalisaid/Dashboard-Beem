import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';


export const ClientsTable = () => {

  const [CustomerData, setCustomerData] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getCustomers', {
          withCredentials: true
        });
  
        if (response.status === 200) {
          // Handle successful response
          setCustomerData(response.data.result);
          
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
    getCustomers();
  
  }, []);

  /******************************************** */
  const handleDeleteCustomer = async (CustomerId) => {
    try {
      // Send a DELETE request to the server to delete the driver
      await axios.delete(`http://localhost:5000/deleteCustomer/${CustomerId}`, {
        withCredentials: true // Ensure credentials are included in the request
      });
  
      // Remove the deleted driver from the local state
      setCustomerData(CustomerData.filter(Customer => Customer.id !== CustomerId));
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };
  /************************************************* */


  const data=CustomerData;
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


  return (
    <div className="container-" style={{ marginTop: '200px' }}>
      
    <h4 style={{ marginLeft: '290px', marginBottom: '-10px' }}>Customers</h4>

    <div className="table-wrapper" style={{ width: '100%', marginLeft: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '60vh' }}>
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
    { currentItems.map((Customer, index) => (
      <tr key={index}>
              <td>{Customer.id}</td>
              <td>{Customer.CIN}</td>
              <td>{Customer.fullName}</td>
              <td>{Customer.city}</td>
              <td>{Customer.phone}</td>
              <td>{Customer.email}</td>       
        <td className="fit">
          <span className="actions" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <BsFillTrashFill className="delete-btn" style={{ color: '#e10d05', marginRight: '5mm' }} onClick={() => handleDeleteCustomer(Customer.id)} />
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
