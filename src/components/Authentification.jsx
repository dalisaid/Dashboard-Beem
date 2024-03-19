import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const SignIn = () => {
  
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg'>
 <div className='p-5 rounded bg-white' style={{ width: '30%' }}>
        <div className='logo'>
          <img src="/img/logo.jpg" alt="Logo" />
          Beem Tunisie
        </div>

        <h3 className="text-center">Sign In</h3>

        <Form>
          <Form.Group className='mb-2' controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  />
          </Form.Group>

          <Form.Group className='mb-2' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  />
          </Form.Group>
          <Link to="/dashboard">
          <div className="d-grid">

         
            <Button  variant="" type="submit" style={{ backgroundColor: '#441879' , color: 'white'}}>Sign in</Button>
            
          </div>
          </Link>
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

