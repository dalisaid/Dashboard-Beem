import React, { useState } from 'react';

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export const DriversTable = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
    <div className="container" >

      <h4 style={{ marginLeft: '190px', marginTop: '200px', marginBottom: '-80px' }}>
        Drivers
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
          marginTop: '80px'
        }}>
          <thead>
            <tr>
              <th colSpan="6">

                <Button onClick={handleShowModal}
                  variant="primary" style={{
                    marginTop: '1rem', // Changed margin-top to a string value
                    border: 'none',
                    backgroundColor: '#0b6608',
                    color: '#fff',
                    padding: '0.5rem 1rem', // Changed padding to a string value
                    borderRadius: '10px', // Changed border-radius to a string value
                    cursor: 'pointer',
                    boxShadow: '0px 5px 5px #ccc', // Changed boxShadow to a string value
                  }}>Add Driver</Button>



                {showModal && (
                  <div
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '10px',
                        boxShadow: '0px 5px 5px #ccc',
                        width:'35%'
                      }}
                    >
                      <h2>Add Driver</h2>
                      <Form>
              <Table>
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td><Form.Control type="text" name="id"  /></td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td><Form.Control type="text" name="name"  /></td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td><Form.Control type="text" name="age" /></td>
                  </tr>
                  <tr>
                    <td>City:</td>
                    <td><Form.Control type="text" name="city"  /></td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td><Form.Control type="text" name="gender"  /></td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td><Form.Control type="email" name="email"  /></td>
                  </tr>
                </tbody>
              </Table>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}> {/* Added flexbox styles */}
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
               
                <Button  variant="success" type="submit">
                 Save Changes 
                </Button>
                </div>
            </Form>
                    </div>
                  </div>
                )}




                {/* Add your button here */}
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
              <td>Doe</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>jhon@gmail.com</td>
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
    
    </div>
  );
};
