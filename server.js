const express = require('express');
   const dboperations = require('./dbfiles/dboperations');
   const cors  =require('cors');
   const sql = require('mssql');
const bodyParser = require('body-parser');


const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());


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
    res.status(result.status).json({ data: result.data });
});

/********************************** */

app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}`);
  });
  
