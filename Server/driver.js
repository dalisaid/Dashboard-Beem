const express = require('express');
const dboperations = require('../dbfiles/Driverdboperations');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Set up Express router
const router = express.Router();

// Middleware
router.use(cors({
  origin: 'http://localhost:3000', // Replace with your allowed origin
  credentials: true
}));
router.use(bodyParser.json());
router.use(cookieParser(process.env.DRIVER_SECRET));



/****************************Token */

const generateToken = (payload) => {
    // Sign the token with a secret key and options (such as expiration)
    return jwt.sign(payload, process.env.DRIVER_SECRET, { expiresIn: '24h' });
  };


  router.get('/validatetoken', function (req, res) {
    const token = req.cookies.authToken;
    let valid = { token: false };
  
    try {
      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
  
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token', valid });
      } else {
        valid.token = true;
        res.status(200).json(valid);
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token', valid });
    }
  });



  /*********************************** */
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const result = await dboperations.checkUser(email, password);
  
      if (result.status === 200) {
        const Role='driver';
        const token = generateToken({ email, password,Role });
  
        console.log('Generated token:', token);
        res.cookie('authToken', token, { sameSite: 'None', secure: true, httpOnly: true });
        return res.status(result.status).json({});
      } else {
        console.log('Invalid email or password');
        return res.status(result.status).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error connecting or authenticating user:', error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  router.get('/connecteduser', (req, res) => {
    try {
      const token = req.cookies.authToken;

      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      } else {
        const { email,Role } = decoded; // Extracting email from decoded token
        res.status(200).json({ email,Role });
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });



  router.get('/driverdata', async (req, res) => {
    try {
      const token = req.cookies.authToken;
      
      
      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      } else {
        const { email } = decoded
        const result = await dboperations.getdriverdata(email);
        res.status(200).json({ result });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    }
  });


  /**************************************************************driver*/


  router.get('/getridesDriver', async (req, res) => {
    try {
      const token = req.cookies.authToken;

      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
      } else {
        const result = await dboperations.getRidesDriver(decoded.email); // Pass decoded email
        res.status(200).json({ result });
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });



  router.get('/getDriverTransaction', async (req, res) => {
    try {
      const token = req.cookies.authToken;

      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
      } else {

        const result = await dboperations.getDriverTransaction(decoded.email); // Pass decoded email
        res.status(200).json({ result });
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });


  router.get('/Chartdata', async (req, res) => {
          try {
            const token = req.cookies.authToken;

            const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
            if (!decoded) {
              console.log('Generated token:', token);
              return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
            } else {

        const RidesCompleted = await dboperations.getRidesCompleted(decoded.email);
        const ridesmonth = await dboperations.getDriverRides(decoded.email);
        const last5Transactions= await dboperations.getlast5transaction(decoded.email);
        const lastRides= await dboperations.getlastRides(decoded.email);
  
        res.status(200).json({ ridesmonth, RidesCompleted,last5Transactions,lastRides });
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  });
  

  /************************************************* */
  router.post('/updateDriverprofile', async (req, res) => {
    try {
      const token = req.cookies.authToken;
      const decoded = jwt.verify(token, process.env.DRIVER_SECRET);
      if (!decoded) {
        console.log('Generated token:', token);
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
      } else {
        const { id, fullName,city,  email, phone, password } = req.body;
        const result = await dboperations.updatedriverdata({ id, fullName, city, email, phone, password });
        res.clearCookie('authToken');
        res.status(result.status).json({ message: result.message });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating Driver data');
    }
  });


module.exports = router;