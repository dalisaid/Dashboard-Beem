const config = require('./dbconfig'),
  sql = require('mssql');



  const checkUser = async (email, password) => {
    try {
      // Connect to the SQL Server
      const pool = await sql.connect(config);
  
      // Execute a parameterized query to retrieve user data
      const result = await pool.request()
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .query(`
                  SELECT *
                  FROM Drivers 
                  WHERE email = @email AND password = @password
                  `);
  
      // Check if the user exists
      if (result.recordset.length > 0) {
  
        console.log('User authenticated successfully');
  
        return { status: 200 };
      } else {
        console.log('Invalid email or password');
        return { status: 401 };
      }
    } catch (error) {
      console.error('Error signing in:', error);
      return { status: 500 }; // Internal Server Error
    }
  };





  const getdriverdata = async (email) => {
    try {
      let pool = await sql.connect(config);
      
      let driver = await pool.request()
      .input('email', sql.VarChar, email)
      .query("SELECT * from drivers  WHERE email = @email ");
      const result = driver.recordset[0];

    return result;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}



  const getRidesDriver = async (email) => {
    try {
      let pool = await sql.connect(config);
      let admin = await pool.request()
        .input('email', sql.NVarChar, email)
        .query(`
          SELECT 
            R.id,
            R.[DriverID],
            C.fullName,
            C.email,
            R.[DriverID],
            R.[StartLatitude],
            R.[StartLongitude],
            R.[DestinationLatitude],
            R.[DestinationLongitude],
            R.[DateRides]
          FROM 
            [SQLTEST].[dbo].[Rides] R
          INNER JOIN 
            [SQLTEST].[dbo].[Drivers] C ON R.[DriverID] = C.id
          WHERE 
            C.[email] = @email
          ORDER BY 
            R.[DateRides] DESC;
        `);
      const result = admin.recordset;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  
  


  

  module.exports = {
    getRidesDriver,checkUser,getdriverdata
  }