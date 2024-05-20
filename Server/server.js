const express = require('express');


// Set up Express app
const app = express();
const API_PORT = process.env.PORT || 5000;



/****************************Token */


// Import route files
const adminRoutes = require('../Server/admin');
const clientRoutes = require('../Server/client');
const driverRoutes = require('../Server/driver');





// Use route files
//app.use('/admin', adminRoutes);
app.use(adminRoutes);
app.use('/client', clientRoutes);
app.use('/driver', driverRoutes);

app.listen(API_PORT, () => {
  console.log(`Server is listening on port ${API_PORT}`);
});





