import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Transaction = ({ openModal }) => {
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
Transaction        </h4></div>

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
        

            <tr >
              <th>ID</th>
              <th>DRIVER NAME</th>              
              <th></th>
              <th>PAYMENT TYPE</th>
              <th>AMOUNT</th>
              <th>DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            {/* Wrap each row with Link */}
            <tr>
              <td>312</td>
              <td>Mohsen</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
                 
                </span>
              </td>


            </tr>


            <tr>
              <td>312</td>
              <td>Mohsen Taxisti</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
                 
                </span>
              </td>


            </tr>

            <tr>
              <td>312</td>
              <td>Mohsen Taxisti</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
                  
                </span>
              </td>


            </tr>
            <tr>
              <td>312</td>
              <td>Mohsen Taxisti</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
                
                </span>
              </td>


            </tr>
            <tr>
              <td>312</td>
              <td>Mohsen Taxisti</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
               
                </span>
              </td>


            </tr>
            <tr>
              <td>312</td>
              <td>Mohsen Taxisti</td>
              <th></th>
              <td>Cash Payment</td>
              <td>15DT</td>
              <td>18/11/2002</td>
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
