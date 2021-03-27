// Imports the necessary library
const mysql = require('mysql');

// Creates a connection item for the database created by the schema
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234568',
  database: 'employee_db',
});

// Connects and logs errors if they occur
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  // The next line is commented out to keep it from interfering with the UI
  // console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
