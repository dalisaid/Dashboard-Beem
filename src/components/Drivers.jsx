import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../App.css";
import { Table, Form, FormControl } from 'react-bootstrap';

export const DriversTable = ({ openModal }) => {
  return (
    <div className="container">
      <div className="header">
        <h2>All Drivers</h2>
        <div style={{ display: "flex", justifyContent: "right", marginRight:"10%" }}>
        {/* Placeholder for search bar */}
        <Form className="mt-3">
  <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
</Form>

        {/* Placeholder for filter bar */}
        <Form className="mt-3 ml-3"> {/* Added a margin-left for spacing */}
  <Form.Control as="select" className="filter-select">
    <option>Filter by City</option>
    <option>New York</option>
    <option>Los Angeles</option>
    {/* Add more cities as needed */}
  </Form.Control>
</Form>
      </div>
      </div>
      <div className="table-wrapper">
        <Table hover style={{ width: '80%', textAlign: "left" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            <tr>
              <td>1</td>
              <td>Doe</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>jhon@gmail.com</td>
              <td className="fit">
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
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
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
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
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
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
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
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
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
                </span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Doe</td>
              <td>30</td>
              <td>New York</td>
              <td>Male</td>
              <td>jhon@gmail.com</td>
              <td className="fit">
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => openModal()}
                  />
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
