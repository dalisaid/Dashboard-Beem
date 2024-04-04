   const express = require('express');
   const dboperations = require('./dbfiles/dboperations');
   const cors  =require('cors');
   const sql = require('mssql');
   const bodyParser = require('body-parser');
   const cookieParser = require('cookie-parser');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your allowed origin
    credentials: true
    
  }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.JWT_SECRET));



/****************************Token */


const generateToken = (payload) => {
    // Sign the token with a secret key and options (such as expiration)
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
};



/******************************* */


/*******************************************simple function for data acquisition useless as of now */
app.get('/api', function(req, res) {
    console.log('here is your data !');

    // Call the getUser function from dboperations
    dboperations.getUser().then(result => {
        console.log(result.recordset);
        // Send the recordset data as the response to the client
        res.json(result.recordset);
    }).catch(error => {
        console.error('Error fetching user:', error);
        // Send an error response if there's an error
        res.status(500).json({ error: 'Internal server error' });
    });
});

/********************************** checks with the database if a user exists and sends his data back */
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const result = await dboperations.checkUser(email, password);
    const token = generateToken({ email,password });
    console.log('Generated token:', token);
    res.cookie('authToken', token, { sameSite: 'None', secure:true, httpOnly: true });
    
    
    res.status(result.status).json({  });
});

app.get('/logout', (req, res) => {
    // Invalidate the user's session (e.g., clear session data)
    // Clear the HTTP-only authentication cookie
    res.clearCookie('authToken');
    
    // Send response indicating successful logout
    res.send('Logged out successfully.');
});
app.get('/connecteduser', (req, res) => {

    
    const token = req.cookies.authToken;
  
    if (!token) {
        console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    } else { // Corrected placement of else
     
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded; // Extracting email from decoded token
       
        res.status(200).json({ email });
      } 
    }
  );
  
    
  app.get('/getDrivers', async (req, res) => {
    const token = req.cookies.authToken;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
      } else {
        // If the token is valid, proceed with fetching data
        const result = await dboperations.getDrivers();
        res.status(200).json({ result });
      }
    } catch (error) {
      // If decoding fails due to an invalid token, handle the error appropriately
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });
    
    
    
   
  app.get('/getCustomers', async (req, res) => {
    const token = req.cookies.authToken;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
      } else {
        // If the token is valid, proceed with fetching data
        const result = await dboperations.getCustomers();
        res.status(200).json({ result });
      }
    } catch (error) {
      // If decoding fails due to an invalid token, handle the error appropriately
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });




  app.post('/addDriver', async (req, res) => {
    try {
      const token = req.cookies.authToken; // Get the JWT token from the request cookies
  
      if (!token) {
        // If no token is found, respond with a 401 Unauthorized error
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
      }
  
      // Verify the JWT token to ensure authentication
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Extract driver details from request body
      const { id, CIN, fullName, city, phone, email } = req.body;
  
      // Call the addDriver function to add the driver to the database
      const result = await dboperations.addDriver({ id, CIN, fullName, city, phone, email });
  
      // Respond with a success message
      res.status(200).json({ message: 'Driver added successfully', result });
    } catch (error) {
      // If decoding the token fails or if the token is invalid, respond with a 401 Unauthorized error
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });
  
  /********************************** */


  app.delete('/deleteDriver/:id', async (req, res) => {
    try {
      const driverId = req.params.id;
  
      // Call the deleteDriver function to delete the driver from the database
      await dboperations.Deletedriver(driverId);
  
      // Respond with a success message
      res.status(200).json({ message: 'Driver deleted successfully' });
    } catch (error) {
      console.error('Error deleting driver:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


/***************************************** */

app.delete('/deleteCustomer/:id', async (req, res) => {
  try {
      const customerId = req.params.id; // Change variable name to customerId

      // Call the deleteCustomer function to delete the customer from the database
      await dboperations.DeleteCustomer(customerId); // Use customerId here

      // Respond with a success message
      res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
      console.error('Error deleting Customer:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});


/********************************** */

app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}`);
  });
  