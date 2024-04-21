const express = require('express');
const dboperations = require('./dbfiles/dboperations');
const cors = require('cors');
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
app.get('/api', function (req, res) {
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
  /*******token is generated even when operation is failed needs to be fixed */
  const token = generateToken({ email, password });

  console.log('Generated token:', token);
  res.cookie('authToken', token, { sameSite: 'None', secure: true, httpOnly: true });
  res.status(result.status).json({});
});


app.get('/logout', (req, res) => {
  // Invalidate the user's session (e.g., clear session data)
  // Clear the HTTP-only authentication cookie
  res.clearCookie('authToken');
  res.send('Logged out successfully.');     // Send response indicating successful logout
});
app.get('/connecteduser', (req, res) => {


  const token = req.cookies.authToken;

  if (!token) {
    console.log('Generated token:', token);
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded; // Extracting email from decoded token

    res.status(200).json({ email });
  }
}
);

/*********************************Driver*************************** */

app.get('/getDrivers', async (req, res) => {    /****************/
  const token = req.cookies.authToken;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    } else {
      const result = await dboperations.getDrivers();          // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error('Invalid token:', error.message);        // If decoding fails due to an invalid token, handle the error appropriately
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});


app.post('/addDriver', async (req, res) => {
  try {
    const token = req.cookies.authToken; // Get the JWT token from the request cookies

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });          // If no token is found, respond with a 401 Unauthorized error
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);         // Verify the JWT token to ensure authentication
    const { id, CIN, fullName, city, phone, email } = req.body;       // Extract driver details from request body
    const result = await dboperations.addDriver({ id, CIN, fullName, city, phone, email });       // Call the addDriver function to add the driver to the database
    res.status(200).json({ message: 'Driver added successfully', result });       // Respond with a success message
  } catch (error) {
    console.error('Invalid token:', error.message);      // If decoding the token fails or if the token is invalid, respond with a 401 Unauthorized error
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});



app.delete('/deleteDriver/:id', async (req, res) => {
  try {
    const driverId = req.params.id;
    await dboperations.Deletedriver(driverId);       // Call the deleteDriver function to delete the driver from the database
    res.status(200).json({ message: 'Driver deleted successfully' });   // Respond with a success message
  } catch (error) {
    console.error('Error deleting driver:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/*********************Customers********************** */


app.get('/getCustomers', async (req, res) => {
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    } else {
      const result = await dboperations.getCustomers();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error('Invalid token:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });       // If decoding fails due to an invalid token, handle the error appropriately
  }
});




app.delete('/deleteCustomer/:id', async (req, res) => {
  try {
    const customerId = req.params.id; // Change variable name to customerId
    await dboperations.DeleteCustomer(customerId);       // Call the deleteCustomer function to delete the customer from the database
    res.status(200).json({ message: 'Customer deleted successfully' });      // Respond with a success message
  } catch (error) {
    console.error('Error deleting Customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/addCustomer', async (req, res) => {
  try {
    const token = req.cookies.authToken; // Get the JWT token from the request cookies

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });    // If no token is found, respond with a 401 Unauthorized error
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);     // Verify the JWT token to ensure authentication
    const { id, CIN, fullName, city, phone, email } = req.body;     // Extract driver details from request body
    const result = await dboperations.addCustomer({ id, CIN, fullName, city, phone, email });     // Call the addDriver function to add the driver to the database
    res.status(200).json({ message: 'Customer added successfully', result });   // Respond with a success message
  } catch (error) {
    console.error('Invalid token or operation failed:', error.message);     // If decoding the token fails or if the token is invalid, respond with a 401 Unauthorized error
    return res.status(401).json({ message: 'Unauthorized' });
  }
});


/********************************** */

app.get('/getuserbyid/:role/:driverid', async (req, res) => {
  try {
    const token = req.cookies.authToken; // Get the JWT token from the request cookies

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });    // If no token is found, respond with a 401 Unauthorized error
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);     // Verify the JWT token to ensure authentication

    const  driverid  = req.params.driverid;
    const role = req.params.role;
    
    const result = await dboperations.getuserbyid(role,driverid);

    return res.status(200).json({ result });
  } catch (error) {
    console.error('Invalid token or operation failed:', error.message);     // If decoding the token fails or if the token is invalid, respond with a 401 Unauthorized error
    return res.status(401).json({ message: 'Unauthorized' });
  }

});


app.post('/updateUser', async (req, res) => {
  try {
    const token = req.cookies.authToken; // Get the JWT token from the request cookies

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' }); // If no token is found, respond with a 401 Unauthorized error
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the JWT token to ensure authentication
    const { id, CIN, fullName, city, phone, email, role } = req.body; // Extract driver details from request body

    if (role === 'Customers' || role === 'Drivers') {
      const result = await dboperations.updateUser({ id, CIN, fullName, city, phone, email, role }); // Call the updateUser function to update the user in the database
      res.status(200).json({ message: 'User updated', result }); // Respond with a success message
    } else {
      return res.status(400).json({ message: 'Invalid role' }); // Respond with a 400 Bad Request error if the role is not valid
    }
  } catch (error) {
    console.error('Invalid token:', error.message); // If decoding the token fails or if the token is invalid, log the error
    return res.status(401).json({ message: 'Unauthorized: Invalid token' }); // Respond with a 401 Unauthorized error
  }
});


app.get('/getRides', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    } else {
      const result = await dboperations.getRides();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error('Invalid token:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });       // If decoding fails due to an invalid token, handle the error appropriately
  }
});

app.get('/driver-activity', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    }else {
      const result = await dboperations.DriverActivity();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
      
    
  }
} catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } 
    
  
});



/*******************chniya hethi ??? */
app.get('/getplace', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    }else {
      res.status(200).json({ result });
      
    
  }
} catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } 
    
  
});



app.get('/getTransaction', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    } else {
      const result = await dboperations.getTransaction();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error('Invalid token:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });       // If decoding fails due to an invalid token, handle the error appropriately
  }
});




app.get('/getusercount', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    } else {
      const result = await dboperations.getusercount(); // Call getusercount function to fetch data
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error('Invalid token:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});



app.get('/TransactionActivity', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    }else {
      const result = await dboperations.TransactionActivity();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
      
    
  }
} catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } 
    
  
});




app.get('/Last10Transaction', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Generated token:', token);
      return res.status(401).json({ message: 'Unauthorized: No token provided or invalid token' });
    }else {
      const result = await dboperations.GetLast10Transaction();         // If the token is valid, proceed with fetching data
      res.status(200).json({ result });
      
    
  }
} catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  } 
    
  
});


app.listen(API_PORT, () => {
  console.log(`Server is listening on port ${API_PORT}`);
});



