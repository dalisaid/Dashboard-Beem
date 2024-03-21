const config =require('./dbconfig'),
      sql =  require('mssql');


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
        
                // Execute a parameterized query to check if the user exists
             
                const result = await pool.request()
                .input('email', sql.VarChar, email)
                .input('password', sql.VarChar, password)
                .query(`
                  SELECT COUNT(*) AS UserCount 
                  FROM dashboarduser 
                  WHERE email = @email AND pass = @password
                `);
                // Check if the user exists
                const userExists = result.recordset[0].UserCount > 0;
        
                // Return response based on user existence
                if (userExists) {
                    return { status: 200, message: 'User authenticated successfully' };
                } else {
                    return { status: 401, message: 'Invalid email or password' };
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