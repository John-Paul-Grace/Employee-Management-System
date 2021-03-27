const connection = require('./connection.js');

const orm = {
    select(whatToSelect, tableInput) {
        const queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;
