// Imports the database connection
const connection = require('./connection.js');

// Object that performs SQL queries
const orm = {
    // Function to perform a select query
    select(whatToSelect, tableInput, cb) {
        const queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Function that closes the connection
    end() {
        connection.end();
    }
};

module.exports = orm;
