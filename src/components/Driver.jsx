import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DriversTable = () => {
  return (
    <div className="container">
      <div className="container">
        <img src="/img/vc1.jpg" alt="" style={{ width: '120%', height: '190px', marginTop: '-50px', marginRight: '20%' }} />

        <h4 style={{
          textAlign: 'left',
          marginLeft: '40px',
          marginTop: '-120px',// Adjust the value as needed
          color: 'white'
        }}>
          Drivers
        </h4></div>

      <div className="header" style={{
        display: 'relative', // Corrected value from "relative" to "'relative'"
        justifyContent: 'space-between', // Corrected value from "space-between" to "'space-between'"
        width: '80%', // Corrected value from 80% to '80%'
        marginRight: '10%', // Corrected value from 10% to '10%'
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
        width: '95%',
        textAlign: 'left',
        marginTop:'80px'
      }}>
          <thead>
            <tr>
              <th colSpan="6">    <Button variant="primary" style={{
                marginTop: '1rem', // Changed margin-top to a string value
                border: 'none',
                backgroundColor: '#0b6608',
                color: '#fff',
                padding: '0.5rem 1rem', // Changed padding to a string value
                borderRadius: '10px', // Changed border-radius to a string value
                cursor: 'pointer',
                boxShadow: '0px 5px 5px #ccc', // Changed boxShadow to a string value
              }}>Add Driver</Button> {/* Add your button here */}
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


            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>30</td>
              <td>Los Angeles</td>
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
            <tr>
              <td>3</td>
              <td>John Doe</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>Doe@gmail.com</td>
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
            <tr>
              <td>4</td>
              <td>John Doe</td>
              <td>30</td>
              <td>Los Angeles</td>
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
            <tr>
              <td>5</td>
              <td>John Doe</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>Doe@gmail.com</td>
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
            <tr>
              <td>6</td>
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
            <tr>
              <td>7</td>
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
