import React from 'react';
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

export const ProfilDetails = ({ location }) => { // Remove 'export' from here
  const { state } = location || {}; // Ensure location is not undefined

  return (
    <div style={{ marginTop: '150px', marginLeft: '240px' }}>
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
                  <p className="text-muted mb-1">Driver</p>
                  <p className="text-muted mb-4">New York</p>
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
                <MDBCardBody>
                  {[
                    { label: "ID", value: state?.formData?.id, edit: true },
                    { label: "CIN", value: state?.formData?.CIN, edit: true },
                    { label: "fullName", value: state?.formData?.fullName, edit: true },
                    { label: "city", value: state?.formData?.city, edit: true },
                    { label: "phone", value: state?.formData?.phone, edit: true },
                    { label: "email", value: state?.formData?.email, edit: true },

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
      </section>
    </div>
  );
}

