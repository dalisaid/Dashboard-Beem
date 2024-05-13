import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export const AddModal = ({ show, handleClose, handleSubmit, formData, handleChange,buttonLabel  }) => {
  let today = new Date();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'center' }}>Add Driver</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="id">
            <Form.Label>CreationDate</Form.Label>
            <Form.Control type="text" name="date" value={today} readOnly />
          </Form.Group>
          <Form.Group controlId="CIN">
            <Form.Label>CIN</Form.Label>
            <Form.Control type="text" name="CIN" value={formData.CIN} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} style={{ marginBottom: '20px' }} required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} style={{ marginBottom: '20px' }} required />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="success" type="submit">{buttonLabel}</Button>

</div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

