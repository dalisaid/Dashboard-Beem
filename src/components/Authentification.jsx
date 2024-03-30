import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const authenticateUser = async ({ email, password,navigate }) => {
  
  
  
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });

    if (response.status === 200) {
      // Handle successful signin
      console.log('Login successful');
      navigate('/dashboard');
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




export const SignIn = () => {

 
/*************************************** work in progress
  const postData = async (url, requestData) => {
  const newData = await fetch('http://localhost:5000'+url, {
    method: 'POST', // Changed method to POST
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({requestData}) // Stringify an object containing email and password
  }).then(res => res.json());
  
  return newData;
}

const url = '/login';
  /**************************************** */


  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  


  
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the authenticateUser function
    authenticateUser({ email, password,navigate });
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
    <div className='p-5 rounded bg-white' style={{ width: '30%' }}>
      <div className='logo'>
        <img src="/img/logo.jpg" alt="Logo" />
        Beem Tunisie
      </div>

      <h3 className="text-center">Sign In</h3>

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
        
        <p className='text-end'>
          Forgot <Link to="/">Password ?</Link> <Link to="/signup">Sign Up</Link>
        </p>
      </Form>
    </div>
  </div>
  );
};

export const SignUp = () => {
 
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
 <div className='p-5 rounded bg-white' style={{ width: '50%' }}>
          <div className='logo'>
          <img src="/img/logo.jpg" alt="Logo" />
          Beem Tunisie
        </div>

        <h3 className="text-center">Sign Up</h3>
        <Form>
          <Form.Group className='mb-2' controlId="formBasicEmail">
            <Form.Label>Fisrt Name</Form.Label>
            <Form.Control type="text" placeholder="First Name"  />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name"  />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email"  />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  />
          </Form.Group>


          <div className="d-grid">
            <Button variant="" type="submit" style={{ backgroundColor: '#441879' , color: 'white'}}>Sign Up</Button>
            </div>

            <p className='text-end'>
            Already Registered <Link to="/">Sign In</Link> 
            </p>
        </Form>
      </div>
    </div>
  );
};

