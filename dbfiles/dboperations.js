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

        module.exports ={
            getUser,checkUser
        }