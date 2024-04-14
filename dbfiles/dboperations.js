const config =require('./dbconfig'),
      sql =  require('mssql');

/*****************************************************************************self explanatory check the query */
const getuserbyid = async (role,id) => {
  
  try {
    let pool = await sql.connect(config);
    let user = await pool.request()
      .input('role', sql.VarChar, role)
      .input('id', sql.Int, id)
      .query(`SELECT * from  ${role} where id=@id`);
      
   const result=user.recordset
    if (result) {
      
      return result; // Return the user record
    } else {
      console.log('User not found',id);
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
            
            return { status: 200  };
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
const addCustomer = async ({ id, CIN, fullName, city, phone, email }) => {
  try {
    const pool = await sql.connect(config);
    const query = `
    INSERT INTO Customers (CIN, fullName, city, phone, email)
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
    console.error('Error adding Customer to the database:', error);
    throw error;
  }
};

const updateUser = async ({ id, CIN, fullName, city, phone, email,role }) => {
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


/****************************************** */
        module.exports ={
           updateUser, getuserbyid,checkUser,getDrivers,getCustomers,addDriver,Deletedriver,DeleteCustomer,addCustomer
        }