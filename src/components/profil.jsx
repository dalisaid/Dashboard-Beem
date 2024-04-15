import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  Form,  Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { BsFillPencilFill } from "react-icons/bs";

export const ProfilDetails = () => { // Remove 'export' from here


  const [user, setUser] = useState([]); // Changed from [] to {} since it seems you're expecting an object

  const { role, userid } = useParams();


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getuserbyid/${role}/${userid}`, // Changed from single quotes to backticks for template literal
          { withCredentials: true }
        );
        if (response.status === 200) {

          setUser(response.data.result[0]);


        } else {
          console.log('Unexpected status code:', response.status);
          alert('Error getting userinfo');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getUser();

    // Call the function to fetch drivers
  }, [userid, role]);


  


  const [formData, setFormData] = useState({
    role:role,
    id: userid,
    CIN: '',
    fullName: '',
    city: '',
    phone: '',
    email: ''
  });


/*******************************************the modal needs to be put in a component of its own */

// Handle form submission to add a new driver
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('formData:', formData); // Log formData before making the request
  try {
    const response = await axios.post('http://localhost:5000/updateUser', formData, {
      withCredentials: true // Ensure credentials are included in the request
    });
    console.log('Response:', response.data); // Log the response from the server
    handleCloseModal();
   window.location.reload();
    } catch (error) {
    console.error('Error:', error);
    alert('Network error or other issue occurred');
  }
};


  // State and functions for modal
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

/************************************************** */
  return (
    <div style={{ marginTop: '150px' }}>
      <section>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  
                  <p className="text-muted mb-1">{user.fullName}</p>
                  <p className="text-muted mb-4">{user.city}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">

                  <MDBListGroup flush className="rounded-3">
                    {[
                      { icon: "globe", text: "https://mdbootstrap.com" },
                      { icon: "github", text: "mdbootstrap", color: "#333333" },
                      { icon: "twitter", text: "@mdbootstrap", color: "#55acee" },
                      { icon: "instagram", text: "mdbootstrap", color: "#ac2bac" },
                      { icon: "facebook", text: "mdbootstrap", color: "#3b5998" }
                    ].map(({ icon, text, color }) => (
                      <MDBListGroupItem key={icon} className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon={`${icon} fa-lg`} style={{ color }} />
                        <MDBCardText>{text}</MDBCardText>
                      </MDBListGroupItem>
                    ))}
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
              <Button
                  onClick={handleShowModal}

                  style={{
                    position: "relative",
                    padding: "10px 22px",
                    backgroundColor: "#584cac",
                    borderRadius: "6px",
                    color: "#fff",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor: "pointer",
                    boxShadow: "0 5px 10px black rgba(0,0,0,0.1)",

                  }}
                >
                 update account information
                </Button>
                <MDBCardBody>
                  {[
                    { label: "ID", value: user.id, edit: true },
                    { label: "CIN", value: user.CIN, edit: true },
                    { label: "fullName", value: user.fullName, edit: true },
                    { label: "city", value: user.city, edit: true },
                    { label: "phone", value: user.phone, edit: true },
                    { label: "email", value: user.email, edit: true },

                  ].map(({ label, value, edit }) => (
                    <React.Fragment key={label}>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>{label}</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">{value}</MDBCardText>
                        </MDBCol>
                        {edit && <BsFillPencilFill className="edit-btn" style={{ marginLeft: '350px' }} />}
                      </MDBRow>
                      <hr />
                    </React.Fragment>
                  ))}
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Revenue</span> Project Status</MDBCardText>
                      {[
                        { label: "Project Status", width: 80 },
                        { label: "Website Markup", width: 72 },
                        { label: "One Page", width: 89 },
                        { label: "Mobile Template", width: 55 },
                        { label: "Backend API", width: 66 }
                      ].map(({ label, width }) => (
                        <React.Fragment key={label}>
                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>{label}</MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar width={width} valuemin={0} valuemax={100} />
                          </MDBProgress>
                        </React.Fragment>
                      ))}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Assignment</span> Project Status</MDBCardText>
                      {[
                        { label: "Project Status", width: 80 },
                        { label: "Website Markup", width: 72 },
                        { label: "One Page", width: 89 },
                        { label: "Mobile Template", width: 55 },
                        { label: "Backend API", width: 66 }
                      ].map(({ label, width }) => (
                        <React.Fragment key={label}>
                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>{label}</MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar width={width} valuemin={0} valuemax={100} />
                          </MDBProgress>
                        </React.Fragment>
                      ))}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' }}>Add Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" name="id" value={user.id} readOnly />
            </Form.Group>
            <Form.Group controlId="CIN">
              <Form.Label>CIN</Form.Label>
              <Form.Control type="text" name="CIN" value={formData.CIN} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
              <Button variant="success" type="submit">Save Changes</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      </section>

    </div>
  );
}

