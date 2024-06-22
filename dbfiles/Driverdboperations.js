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


const getDriverTransaction = async (email) => {
  try {
    let pool = await sql.connect(config);
    let admin = await pool.request()
      .input('email', sql.VarChar, email)
      .query(`
        SELECT 
        T.id,
    T.[DriverID],
        C.fullName,
        C.email,
    T.Amount,
        T.[TransactionDate]
      FROM
        [SQLTEST].[dbo].[Transaction] T
      INNER JOIN 
        [SQLTEST].[dbo].[Drivers] C ON T.[DriverID] = C.id
      WHERE 
        C.[email] =@email
      ORDER BY 
        T.[TransactionDate] DESC;
        `);
    const result = admin.recordset;
    return result;
  } catch (error) {
    console.log(error);
  }
}





const getRidesCompleted = async (email) => {
  try {

    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('email', sql.VarChar, email)
      .query(`SELECT COUNT(*) AS TotalRidesCompleted
      FROM [SQLTEST].[dbo].[Rides] R
INNER JOIN 
[SQLTEST].[dbo].[Drivers] D ON R.[DriverID] = D.id
      WHERE D.[email] =@email;`);
    console.log('result rides compeleted:', result);
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

const getDriverRides = async (email) => {
  try {

    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('email', sql.VarChar, email)
      .query(`SELECT  MONTH(DateRides) AS Month,
      COUNT(*) AS TotalRides
            FROM [SQLTEST].[dbo].[Rides] R
     INNER JOIN 
    [SQLTEST].[dbo].[Drivers] D ON R.[DriverID] = D.id
            WHERE D.[email] =@email
            GROUP BY 
              MONTH(R.DateRides)
            ORDER BY 
              Month;`);
    console.log('result driver rides:', result); 
    return result.recordset; 
  } catch (error) {
    throw error; 
  }
};



const getlast5transaction = async (email) => {
  try {

    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('email', sql.VarChar, email)
      .query(`SELECT TOP 5
      t.id,
      d.fullName AS FullName,
      t.[TransactionDate] AS [Date],
    t.Amount
  FROM 
      [Transaction] t
  JOIN 
      Drivers d ON t.DriverID = d.id
	  where email=@email
  ORDER BY 
      t.[TransactionDate] DESC;`);
    console.log('last 5 transaction:', result); 
    return result.recordset; 
  } catch (error) {
    throw error; 
  }
};


const getlastRides = async (email) => {
  try {

    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('email', sql.VarChar, email)
      .query(`SELECT TOP 5
      R.id,
	  R.[StartLatitude],
      R.[StartLongitude],
      R.[DestinationLatitude],
      R.[DestinationLongitude],
      R.[DateRides] AS [Date]
  FROM 
      rides R
  JOIN 
      Drivers d ON R.DriverID = d.id
	  where email=@email
  ORDER BY 
      R.[DateRides] DESC;`);
    console.log('last 5 rides:', result); 
    return result.recordset; 
  } catch (error) {
    throw error; 
  }
};
const updatedriverdata = async ({ id, fullName, email,city, phone, password }) => {
  try {
    const pool = await sql.connect(config);
    const query = `
      UPDATE Drivers
      SET fullName = @fullName,
      city = @city,  
          email = @email, 
          phone = @phone, 
          password = @password 
      WHERE id = @id
    `;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .input('fullName', sql.VarChar, fullName)
      .input('city', sql.VarChar, city)

      .input('email', sql.VarChar, email)
      .input('phone', sql.VarChar, phone)
      .input('password', sql.VarChar, password)
      .query(query);

    // Close the connection after executing the query
    pool.close();

    // Check if any rows were affected
    if (result.rowsAffected.length === 0) {
      // No rows were updated, probably because the user with the given id doesn't exist
      return { status: 404, message: 'User not found' };
    }

    return { status: 200, message: 'User updated successfully' };
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

module.exports = {
  getRidesDriver, checkUser, getdriverdata, getDriverTransaction, getRidesCompleted, getDriverRides,getlast5transaction,getlastRides,updatedriverdata
}