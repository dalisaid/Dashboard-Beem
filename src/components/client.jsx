import React from 'react';
import { Table, Form, FormControl } from 'react-bootstrap';

export const ClientTable = () => {
  return (
    <div>
        <h2>All Client</h2>
        <div style={{ display: "flex", justifyContent: "right", marginRight:"10%" }}>
        {/* Placeholder for search bar */}
        <Form className="mt-3">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        {/* Placeholder for filter bar */}
        <Form className="mt-3 ml-3">  {/* Added a margin-left for spacing */}
          <Form.Control as="select">
            <option>Filter by City</option>
            <option>New York</option>
            <option>Los Angeles</option>
            {/* Add more cities as needed */}
          </Form.Control>
        </Form>
      </div>
      
      <Table   hover style={{ width: '80%' ,textAlign:"left"}}>
       
      <thead > {/* Apply color to the entire thead */}
          <tr >
            <th  >#</th>
            <th >Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Gender</th>
            <th>Profession</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {/* Sample data */}
          <tr  >
            <td>1</td>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
            <td>Male</td>
            <td>Software Engineer</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          <tr >
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
            <td>Female</td>
            <td>Doctor</td>
          </tr>
          
          {/* Add more data as needed */}
        </tbody>
      </Table>
       
      </div>
  );
};
