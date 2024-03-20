const express = require('express');
   const cors  =require('cors');
   


const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());




app.get('/api', function(req, res) {
    console.log('Called');
    res.json({ message: 'Hello from authentication' });
    });







app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}`);
  });