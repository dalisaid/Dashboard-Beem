const config =require('./dbconfig'),
      sql =  require('mssql');

/*****************************************************************************self explanatory check the query */
      const getUser= async() => {
        try {
        let pool= await sql.connect(config);
        let users = pool.request().query("SELECT * from dashboarduser")
        console.log(users);
        return users;
        }
        catch (error)
        {
            console.log(error);
        }
        }

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
            
            return { status: 200  };
        } else {
            console.log('Invalid email or password');
            return { status: 401 };
        }
    } catch (error) {
        console.error('Error signing in:', error);
        return { status: 500, message: 'An error occurred while signing in' };
    }
};
/**************************************** */

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


const addDriver = async ({ id, CIN, fullName, city, phone, email }) => {
    try {
      const pool = await sql.connect(config);
      const query = `
      INSERT INTO Drivers (CIN, fullName, city, phone, email)
      VALUES (@CIN, @fullName, @city, @phone, @email)
            `;
      const result = await pool.request()
        .input('CIN', sql.VarChar, CIN)
        .input('fullName', sql.VarChar, fullName)
        .input('city', sql.VarChar, city)
        .input('phone', sql.VarChar, phone)
        .input('email', sql.VarChar, email)
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
/***************************************** */

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

/****************************************** */
        module.exports ={
            getUser,checkUser,getDrivers,getCustomers,addDriver,Deletedriver,DeleteCustomer
        }