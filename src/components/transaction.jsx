import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Table, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Transaction = () => {


  /************************************************************** */

 




 return (



  <div className="container-"  style={{ 
    width: "70vw",
    height: "70vh",
    backgroundColor: "#fff5",
    marginLeft: "270px",
    marginTop: "190px",
    backdropFilter: "blur(7px)",
    boxShadow: "0 .4rem .8rem #0005",
    borderRadius: ".8rem",
    overflow: "hidden"
  }} >
      
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
      <h1>Transaction</h1>
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
  <div className="table_body" style={{
        width: "95%",
        maxHeight: "calc(89% - 1.6rem)",
        backgroundColor: "#fffb",
        margin: ".8rem auto",
        borderRadius: ".6rem",
        overflow: "auto",
        overflowY: "overlay"
      }}>

  <Table hover style={{
          width: "95%", maxHeight: "calc(89% - 1.6rem)",
          backgroundColor: "#fffb", margin: ".8rem auto", borderRadius: ".6rem",
          overflow: "auto", overflowY: "overlay", borderCollapse: 'collapse',
          padding: '1rem'
        }} >
<thead>
 
  <tr>
  <th  style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
              ID
            </th> <th style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
              DRIVER NAME
            </th>

            <th style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
              PAYMENT TYPE
            </th>
            <th  style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
              AMOUNT 
            </th>
            <th  style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
              DATE 
            </th>
            <th  style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}} class="icon-arrow">
               
            </th>
    <th class="icon-arrow" style={{ cursor: 'pointer' ,top: 0, left: 0, backgroundColor: '#d5d1defe' , borderCollapse: 'collapse'}}></th >
  </tr>
</thead>
<tbody>

    <tr>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>       
      <td className="fit">
        <span className="actions" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BsFillTrashFill className="delete-btn" style={{ color: '#e10d05', marginRight: '5mm' }}  />
          <Link to="/profil" style={{ textDecoration: 'none', color: 'black', marginRight: '1mm' }}>
            <BsFillPencilFill className="edit-btn" />
          </Link>
        </span>
      </td>
    </tr>
 
</tbody>
</Table>
        </div>
      
  </div>


















);






}