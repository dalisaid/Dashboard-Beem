import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ClientsTable = ({ openModal }) => {
  return (
    <div className="container">
    
        <h4 style={{marginLeft:'190px' , marginTop:'200px',marginBottom:'-80px'}}>
          Customers
        </h4>

      <div className="header" style={{
        display: 'relative', // Corrected value from "relative" to "'relative'"
        justifyContent: 'space-between', // Corrected value from "space-between" to "'space-between'"
        width: '80%', // Corrected value from 80% to '80%'
        marginTop: '100px', // Corrected value from 100px to '100px'
        marginBottom: '-50px', // Corrected value from -50px to '-50px'
      }}>

        <div style={{ display: "flex", justifyContent: "right", marginRight: "10%" }}>


        </div>
      </div>
      <div className="table-wrapper" style={{
        width: '100%', // Specify width as a string with units
        marginLeft: '50px', // Adjust the value as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Ensure the table is centered vertically
        height: '60vh', // Optionally, set a height to center vertically on the page
      }}>
        <Table hover style={{
        width: '80%', textAlign: "left", padding: '10px', height: '100%',
        '.table th, .table td': {
          padding: "10px"
        },
        marginTop:'80px'
      }}>
          <thead>
            <tr>
              <th colSpan="6">  
              </th> {/* Empty cells to align the search input and filter bar */}
              <th colSpan="1"> {/* Set colspan to span one column */}
                <div className="d-flex align-items-center justify-content-end"> {/* Use flexbox to align items */}
                  <Form className="mt-3 mr-3"> {/* Added margin-right for spacing */}
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2 search-input"
                      style={{
                        border: '1px solid #ced4da', // Add border
                        borderRadius: '5px', // Add border radius
                        padding: '0.5rem', // Add padding
                        width: '250px', // Set width as per your requirement
                        marginRight: '20px', // Add margin to the right
                        ':focus': { // Apply styles when the input is focused
                          outline: 'none', // Remove outline on focus
                          borderColor: '#007bff', // Change border color on focus
                        }
                      }}
                    />
                  </Form>
                  <Form className="mt-3 mr-3"> {/* Added margin-right for spacing */}
                    <Form.Control as="select" className="filter-select" style={{
                      border: '1px solid #ced4da', // Add border
                      borderRadius: '5px', // Add border radius
                      padding: '0.5rem', // Add padding
                      width: '150px', // Set width as per your requirement
                      backgroundColor: '#fff', // Set background color
                      ':focus': { // Apply styles when the select input is focused
                        outline: 'none', // Remove outline on focus
                        borderColor: '#007bff', // Change border color on focus
                      }
                    }}>
                      <option>Filter by City</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      {/* Add more cities as needed */}
                    </Form.Control>
                  </Form>
                </div>
              </th>
            </tr>

            <tr >
              <th>#</th>
              <th>Name</th>              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            {/* Wrap each row with Link */}
           
            <tr>
              <td>1</td>
              <td>Mohsentaxisti</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>mohsen@gmail.com</td>
              <td className="fit">
                <span className="actions" style={{
                  display: 'flex',
                  justifyContent: 'flex-end', // Changed 'space-between' to 'flex-end'
                  alignItems: 'center',
                }}>
                  <BsFillTrashFill className="delete-btn" style={{
                    color: '#e10d05',
                    marginRight: '5mm',
                  }} />
                  <Link to="/profil" style={{ textDecoration: 'none', color: 'black', marginRight: '1mm', }}> {/* Removed unnecessary 's' */}
                    <BsFillPencilFill
                      className="edit-btn"
                    />
                  </Link>
                </span>
              </td>
            </tr>
            {/* Add more data as needed */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
