import React, { useState } from 'react';
import { Modal,Form } from 'react-bootstrap';
import {  Button, Grid, FormControl, InputLabel, OutlinedInput, RadioGroup, FormControlLabel, Radio } from '@mui/material';


export const AddModal = ({ show, handleClose, handleSubmit, formData, handleChange, buttonLabel }) => {
  let today = new Date();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'center' }}>Add Driver</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
  <Grid container spacing={3}>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth>
        <InputLabel>Creation Date</InputLabel>
        <OutlinedInput
          type="text"
          name="date"
          value={today}
          readOnly
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>CIN</InputLabel>
        <OutlinedInput
          type="text"
          inputProps={{ pattern: "[0-9]{4}[0-9]{4}" }}
          name="CIN"
          value={formData.CIN}
          onChange={handleChange}
          required
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>Full Name</InputLabel>
        <OutlinedInput
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
    <InputLabel>Gender*</InputLabel>
      <FormControl fullWidth required>
        
        
        <RadioGroup
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          row
        >
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>City</InputLabel>
        <OutlinedInput
          type="text"
          
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>Phone</InputLabel>
        <OutlinedInput
          type="text"
          inputProps={{ pattern: "[0-9]{3}[0-9]{3}[0-9]{4}" }}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>Email</InputLabel>
        <OutlinedInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          
        />
      </FormControl>
    </Grid>
    <Grid item md={6} xs={12}>
      <FormControl fullWidth required>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </FormControl>
    </Grid>
  </Grid>
  <div style={{ marginTop: '20px', textAlign: 'right' }}>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="success" type="submit">{buttonLabel}</Button>
  </div>
</Form>
      </Modal.Body>
    </Modal>
  );
}

