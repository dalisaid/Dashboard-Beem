import React from "react";
import { BsFillTrashFill} from "react-icons/bs";
import { Table} from 'react-bootstrap';

export const Transaction = ({ openModal }) => {
  return (
    <div className="container">
   
   <h4 style={{marginLeft:'190px' , marginTop:'200px',marginBottom:'-230px'}}>
          Transaction
        </h4>

      <div className="header" style={{
        display: 'relative', // Corrected value from "relative" to "'relative'"
        justifyContent: 'space-between', // Corrected value from "space-between" to "'space-between'"
        width: '80%', // Corrected value from 80% to '80%'
        marginBottom: '260px', // Corrected value from -50px to '-50px'
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
