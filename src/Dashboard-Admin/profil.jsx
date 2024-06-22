import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCab, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
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

  const [revenuegenerated, setRevenueGenerated] = useState();
  const [ridescompleted, setRidesCompleted] = useState();

  const [isUpdated, setIsUpdated] = useState(false);



  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/userdata/${role}/${userid}`, // Changed from single quotes to backticks for template literal
          { withCredentials: true }
        );
        if (response.status === 200) {

          setUser(response.data.result.userinfo[0]);
          setRevenueGenerated(response.data.result.revenue)
          setRidesCompleted(response.data.result.ridesdone)

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
    role: role,
    id: userid,
    CIN: "",
    fullName: "",
    gender:"",
    city: "",
    phone: "",
    email: "",
    password: ""
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
     setIsUpdated(true);
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
                  {
                    user.gender === 'Female' ? (
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid
                      />
                    ) : (
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid
                      />
                    )
                  }
                  {role === 'Drivers' ? (
                    <p className="text-muted mb-1" style={{ fontWeight: 'bolder' }}>Driver</p>
                  ) : role === 'Customers' ? (
                    <p className="text-muted mb-1" style={{ fontWeight: 'bolder' }}>Customer</p>
                  ) : (
                    <p className="text-muted mb-1" style={{ fontWeight: 'bolder' }}>?????</p> // 
                  )}


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
                  Update Account Information
                </Button>
                <MDBCardBody>
                  {[
                    { label: "ID", value: user.id },
                    { label: "CIN", value: user.CIN },
                    { label: "fullName", value: user.fullName },
                    { label: "gender", value: user.gender },
                    { label: "city", value: user.city },
                    { label: "phone", value: user.phone },
                    { label: "email", value: user.email },
                    { label: "password", value: user.password },
                    { label: "CreationDate", value: user.CreationDate }

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
                {role === 'Drivers' && (
                  <MDBCol md="6">
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        <MDBCardText className="text-center mb-4">
                          <span className="text-primary font-italic">Revenue generated</span><br />
                          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {revenuegenerated} TND
                            

                          </h3>
                          <FontAwesomeIcon icon={faMoneyBill} />
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                )}
                <MDBCol md="6">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBCardText className="text-center mb-4">
                        <span className="text-primary font-italic">Rides completed</span><br />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                          {ridescompleted}
                          

                        </h3>
                        <FontAwesomeIcon icon={faCab} />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center' }}>Update Driver</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ID"
            value={formData.id}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="CIN"
            name="CIN"
            value={formData.CIN}
            onChange={handleChange}
            required
            type="text"
          inputProps={{ pattern: "[0-9]{4}[0-9]{4}" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            type="text"
            inputProps={{ pattern: "[0-9]{3}[0-9]{3}[0-9]{4}" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        <Button variant="success" type="submit">Save Changes</Button>
      </div>
    </form>
          </Modal.Body>
        </Modal>
      </section>

    </div>
  );
}

