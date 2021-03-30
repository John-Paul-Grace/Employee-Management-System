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
    // Function to perform a select-where query
    selectWhere(whatToSelect, column, searchInfo, tableInput, cb) {
        const queryString = 'SELECT ?? FROM ?? WHERE ?? = ?';

        connection.query(queryString, [whatToSelect, tableInput, column, searchInfo], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Function to perform an insert query
    add(whatToAdd, columnsToChange, tableInput, cb) {
        const queryString = 'INSERT INTO ?? (??) VALUES (?)';

        connection.query(queryString, [tableInput, columnsToChange, whatToAdd], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Function to perform a delete query
    remove(whatToRemove, column, tableInput, cb) {
        const queryString = 'DELETE FROM ?? WHERE ?? = ?';

        connection.query(queryString, [tableInput, column, whatToRemove], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Function to perform an update query
    update(updateColumn, newInfo, searchColumn, searchInfo, tableInput, cb) {
        const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';

        connection.query(queryString, [tableInput, updateColumn, newInfo, searchColumn, searchInfo], (err, result) => {
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
