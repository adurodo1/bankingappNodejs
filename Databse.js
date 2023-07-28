const oracleDb= require('oracledb')
let connection;
module.exports=new Promise(function(resolve,reject)
{
    try{
    connection= oracleDb.getConnection({ user: "ordermanagement", password: "password", connectionString: "localhost/orclpdb" })
    console.log("Successfully connected to Oracle Database");
    resolve(connection);
    }
    catch(err)
    {
        console.error(err.message)
    }
});

