import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const authenticateUser = async ({ email, password, navigate }) => {

  
  try {
    const response = await axios.post('http://localhost:5000/client/login', {
  email,
  password

}, {
  withCredentials: true
});

    if (response.status === 200) {
      // Handle successful signin
      console.log('Login successful');
      navigate('/client/Clientdashboard');
    } else {
      // Handle failed signin
      console.error('Failed to login:', response.status, response.statusText);
      alert('Invalid email and password');
    }
  } catch (error) {
    console.error('Error while logging in:', error);
    alert('Error while logging in');
  }
}




export const ClientSignIn = () => {


  


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();






  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the authenticateUser function
    authenticateUser({ email, password, navigate });
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
      <div className='p-5 rounded bg-white' style={{ width: '30%' }}>
      <div className='logo' style={{ position: 'absolute', top: '50px', left: '20px', display: 'flex', alignItems: 'center' }}>
  <img
    src="/img/logo.jpg"
    alt="Logo"
    style={{
      width: '50px', // Adjust logo width
      height: 'auto', // Maintain aspect ratio
      marginRight: '10px', // Add margin to the right
    }}
  />
  <h4 style={{ color: '#F64C02', margin: '0' }}>Beem Smart Taxi </h4>
</div>

        <h3 className="text-center"> Client Sign In</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-2' controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: '#441879', color: 'white' }}
            >
              Sign in
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
};

export const ClientSignUp = () => {

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
      <div className='p-5 rounded bg-white' style={{ width: '50%' ,}}>
        <div className='logo' style={{ position: 'absolute', top: '50px', left: '20px', display: 'flex', alignItems: 'center' }}>
        <img
    src="/img/logo.jpg"
    alt="Logo"
    style={{
      width: '50px', // Adjust logo width
      height: 'auto', // Maintain aspect ratio
      marginRight: '10px', // Add margin to the right
    }}
  />
  <h4 style={{ color: '#F64C02', margin: '0' }}>Beem Tunisie</h4>
        </div>

        <h3 className="text-center">Sign Up</h3>
        <Form>
          <Form.Group className='mb-2' controlId="formBasicEmail">
            <Form.Label>Fisrt Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>


          <div className="d-grid">
            <Button variant="" type="submit" style={{ backgroundColor: '#441879', color: 'white' }}>Sign Up</Button>
          </div>

          <p className='text-end'>
            Already Registered <Link to="/">Sign In</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

