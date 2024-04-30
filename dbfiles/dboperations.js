const config = require('./dbconfig'),
  sql = require('mssql');

/*****************************************************************************self explanatory check the query */
const getuserbyid = async (role, id) => {

  try {
    let pool = await sql.connect(config);
    let user = await pool.request()
      .input('role', sql.VarChar, role)
      .input('id', sql.Int, id)
      .query(`SELECT * from  ${role} where id=@id`);

    const result = user.recordset
    if (result) {

      return result; // Return the user record
    } else {
      console.log('User not found', id);
      return null; // Return null when user not found
    }
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to handle it outside this function
  }
};

/********************************************sends sql query to database and check if user exists  */

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
                FROM dashboarduser 
                WHERE email = @email AND pass = @password
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

  }
};
/**************************************** Drivers***************************/

const getDrivers = async () => {
  try {
    let pool = await sql.connect(config);
    let Drivers = await pool.request().query("SELECT * from Drivers");
    const result = Drivers.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}
/**************************************** */

const addDriver = async ({ CIN, fullName,gender, city, phone, email,password }) => {
  try {
    const pool = await sql.connect(config);
    const query = `
    INSERT INTO Drivers (CIN, fullName, gender, city, phone, email, password, CreationDate)
    VALUES (@CIN, @fullName, @gender, @city, @phone, @email, @password, GETDATE());
          `;
    const result = await pool.request()
      .input('CIN', sql.VarChar, CIN)
      .input('fullName', sql.VarChar, fullName)
      .input('gender', sql.VarChar, gender)
      .input('city', sql.VarChar, city)
      .input('phone', sql.VarChar, phone)
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, password)
      .query(query);

    return result;
  } catch (error) {
    console.error('Error adding driver to the database:', error);
    throw error;
  }
};


/***************************************** */


const Deletedriver = async (driverId) => {
  try {
    const pool = await sql.connect(config);
    const query = `DELETE FROM Drivers WHERE id = @id`;
    const result = await pool.request()
      .input('id', sql.Int, driverId)
      .query(query);

    return result;
  } catch (error) {
    console.error('Error deleting driver from the database:', error);
    throw error;
  }
};

/************************************************Customers**************************************************************** */

const getCustomers = async () => {
  try {
    let pool = await sql.connect(config);
    let Customers = await pool.request().query("SELECT * from Customers");
    const result = Customers.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}
/**************************************** */


const DeleteCustomer = async (CustomerId) => {
  try {
    const pool = await sql.connect(config);
    const query = `DELETE FROM Customers WHERE id = @id`;
    const result = await pool.request()
      .input('id', sql.Int, CustomerId)
      .query(query);

    return result;
  } catch (error) {
    console.error('Error deleting Customer from the database:', error);
    throw error;
  }
};
/**************************************** */
const addCustomer = async ({ CIN, fullName,gender, city, phone, email,password }) => {
  try {
    const pool = await sql.connect(config);
    const query = `
    INSERT INTO Customers (CIN, fullName, gender, city, phone, email, password, CreationDate)
    VALUES (@CIN, @fullName, @gender, @city, @phone, @email, @password, GETDATE());
          `;
    const result = await pool.request()
      .input('CIN', sql.VarChar, CIN)
      .input('fullName', sql.VarChar, fullName)
      .input('gender', sql.VarChar, gender)
      .input('city', sql.VarChar, city)
      .input('phone', sql.VarChar, phone)
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, password)
      .query(query);

    return result;
  } catch (error) {
    console.error('Error adding Customer to the database:', error);
    throw error;
  }
};

const updateUser = async ({ id, CIN, fullName, city, phone, email, role }) => {
  try {
    const pool = await sql.connect(config);
    const query = `
      UPDATE ${role} 
      SET fullName = @fullName, 
          CIN = @CIN, 
          city = @city, 
          phone = @phone, 
          email = @email 
      WHERE id = @id
    `;
    const result = await pool.request()
      .input('role', sql.VarChar, role)

      .input('id', sql.Int, id)
      .input('CIN', sql.VarChar, CIN)
      .input('fullName', sql.VarChar, fullName)
      .input('city', sql.VarChar, city)
      .input('phone', sql.VarChar, phone)
      .input('email', sql.VarChar, email)
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

/********************************************Rides */


const getRides = async () => {
  try {
    let pool = await sql.connect(config);
    let Rides = await pool.request().query(`SELECT 
    r.id ,
    r.DriverID,
    r.CustomerID,
    d.fullName AS DriverFullName,
    c.fullName AS CustomerFullName,
    r.StartLatitude,
    r.StartLongitude,
    r.DestinationLatitude,
    r.DestinationLongitude,
    r.DateRides
FROM 
    rides r
JOIN 
    Drivers d ON r.DriverID = d.id
JOIN
    Customers c ON r.CustomerID = c.id;`);
    const result = Rides.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}
/****************************************** */
const DriverActivity = async () => {
  try {
    let pool = await sql.connect(config);
    let Rides = await pool.request().query(` SELECT 
      DATEPART(month, DateRides) AS Month, 
      COUNT(*) AS ridescompleted
  FROM Rides
  WHERE YEAR(DateRides) = YEAR(GETDATE()) 
  GROUP BY DATEPART(month, DateRides);`);
    const result = Rides.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}
/****************************************** */

const getTransaction = async () => {
  try {
    let pool = await sql.connect(config);
    let Transaction = await pool.request().query(`SELECT 
    t.id,
    t.DriverID,
    d.FullName AS DriverFullName,
    t.Amount,
    t.TransactionDate

FROM 
    [Transaction] t
JOIN 
    Drivers d ON t.DriverID = d.id;`);
    const result = Transaction.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}
/********************************** */
const getusercount = async () => {
  try {
    let pool = await sql.connect(config);
    let driverCountResult = await pool.request().query("SELECT COUNT(*) AS total_drivers FROM drivers");
    let customerCountResult = await pool.request().query("SELECT COUNT(*) AS total_customers FROM customers");

    // Extract counts from the query results
    const driverCount = driverCountResult.recordset[0].total_drivers;
    const customerCount = customerCountResult.recordset[0].total_customers;

    return { drivers: driverCount, customers: customerCount };
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}



/******************************************/

const TransactionActivity = async () => {
  try {
    let pool = await sql.connect(config);
    let Transaction = await pool.request().query(` SELECT DATEPART(month, TransactionDate) AS Month, 
      SUM(Amount) as Amount from [Transaction]
        WHERE YEAR(TransactionDate) = YEAR(GETDATE()) 
        GROUP BY DATEPART(month, TransactionDate);`);
    const result = Transaction.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}


const GetLast10Transaction = async () => {
  try {
    let pool = await sql.connect(config);
    let Transaction = await pool.request().query(` SELECT TOP 10
      t.id,
      d.fullName AS FullName,
      t.[TransactionDate] AS [Date],
    t.Amount
  FROM 
      [Transaction] t
  JOIN 
      Drivers d ON t.DriverID = d.id
  ORDER BY 
      t.[TransactionDate] DESC;
  ;`);
    const result = Transaction.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}


const genderCustomers = async () => {
  try {
    let pool = await sql.connect(config);
    let Transaction = await pool.request().query(`SELECT 
    gender,
    COUNT(id) AS TotalCustomers
FROM 
    Customers
GROUP BY 
    gender;`);
    const result = Transaction.recordset;

    return result;
  } catch (error) {
    console.log(error);
  }
}



const gettotalcustomers = async () => {
  try {
    let pool = await sql.connect(config);
    let CustomerTotalResult = await pool.request().query("SELECT COUNT(*) AS total FROM customers");
    let CustomerThisMonth = await pool.request().query(`SELECT 
    COUNT(id) AS TotalCustomers,
    (SELECT COUNT(id) 
     FROM [SQLTEST].[dbo].[Customers]
     WHERE MONTH(CreationDate) = MONTH(GETDATE()) 
       AND YEAR(CreationDate) = YEAR(GETDATE())) AS NewCustomersThisMonth
FROM 
    [SQLTEST].[dbo].[Customers];
`)
    
    // Extract counts from the query results
    const customerTotal = CustomerTotalResult.recordset[0].total;
    const customerTotalThismonth = CustomerThisMonth.recordset[0].NewCustomersThisMonth;

    return { totalCustomers: customerTotal, newCustomersThisMonth: customerTotalThismonth };
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}


const gettotaldrivers = async () => {
  try {
    let pool = await sql.connect(config);
    let DriverTotalResult = await pool.request().query("SELECT COUNT(*) AS total FROM drivers");
    let DriverThisMonth = await pool.request().query(`SELECT 
    COUNT(id) AS Total_Drivers,
    (SELECT COUNT(id) 
     FROM [SQLTEST].[dbo].[Drivers]
     WHERE MONTH(CreationDate) = MONTH(GETDATE()) 
       AND YEAR(CreationDate) = YEAR(GETDATE())) AS NewDriversThisMonth
FROM 
    [SQLTEST].[dbo].[Drivers];
`)
    
    // Extract counts from the query results
    const DriverTotal = DriverTotalResult.recordset[0].total;
    const DriverTotalThismonth = DriverThisMonth.recordset[0].NewDriversThisMonth;

    return { TotalDrivers: DriverTotal, newDriversThisMonth: DriverTotalThismonth };
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}


const getEarning = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(`
      SELECT SUM([Amount]) AS TotalAmount
      FROM [SQLTEST].[dbo].[Transaction]
    `);
    const totalAmount = result.recordset[0].TotalAmount;

    return totalAmount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


module.exports = {
  getusercount, updateUser, getuserbyid, checkUser, getDrivers, getCustomers, addDriver, Deletedriver, DeleteCustomer, addCustomer,
  getRides, DriverActivity, getTransaction, TransactionActivity,GetLast10Transaction,genderCustomers,gettotalcustomers,gettotaldrivers,getEarning
}