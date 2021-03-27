const inquirer = require('inquirer');
const orm = require('./config/orm');

orm.select('name', 'departments');
