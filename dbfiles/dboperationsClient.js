const config = require('./dbconfig'),
  sql = require('mssql');













  const getRidesCustomer = async (email) => {
    try {
      let pool = await sql.connect(config);
      let admin = await pool.request()
        .input('email', sql.NVarChar, email)
        .query(`
          SELECT 
            R.id,
            R.[CustomerID],
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
            [SQLTEST].[dbo].[Customers] C ON R.[CustomerID] = C.id
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
    getRidesCustomer
  }