// Import modules
const mysql = require("mysql2/promise");
require("dotenv").config();

// Logging a message to indicate that the connection pool is being created
console.log("Creating connection pool...");

// Creating a connection pool with the required parameters
const pool = mysql.createPool({
// The host name of the database
host: "localhost",
// The username to connect to the database, loaded from the environment variables
user: process.env.DB_USER,
// The password to connect to the database, loaded from the environment variables
password: process.env.DB_PW,
// The name of the database to connect to
database: "employee_db",
});

module.exports = pool;