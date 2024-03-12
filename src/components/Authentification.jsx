import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Authentification = () => {
  return (
    <div>
      <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
        <div className='50-w p-5 rounded bg-white'>
          <div className='logo'>
            <img src="/img/logo.jpg" alt="Logo" />
            Beem Tunisie
          </div>

          <h3>Sign In</h3>

          <Form>
            <Form.Group className='mb-2' controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className='mb-2' controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">Sign in</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
