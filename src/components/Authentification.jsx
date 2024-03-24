import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { useMutation  } from 'react-query';

const authenticateUser = async ({ email, password }) => {
  
  
  
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (response.ok) {
      // Handle successful signin
      return response.json();
      
      
    } else {
      // Handle failed signin
      
      throw new Error(' user data fetching data'); // Throw an error if failed to fetch data
      
    }
   
};




export const SignIn = () => {

 
/*************************************** work in progress
  const postData = async (url, requestData) => {
  const newData = await fetch('http://localhost:5000'+url, {
    method: 'POST', // Changed method to POST
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(requestData) // Stringify the request data
  }).then(res => res.json());
  
  return newData;
}

const url = '/login';
  /**************************************** */


  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  


  const { mutate, isLoading } = useMutation(authenticateUser, {
    onSuccess: (data) => {
      // Handle successful login (e.g., redirect to dashboard)
      console.log('Login successful',data);
      navigate('/dashboard');
    },
    onError: (error) => {
      // Handle login error
      
      console.error('Login failed:', error.message);
      alert('invalide email and password');
    },
  });
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the authenticateUser function
    mutate({ email, password });
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

