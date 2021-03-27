// Imports all necessary files and libraries
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const orm = require('./config/orm');
const questions = require('./config/questions');

// Functions for department management
// =========================================================================
function addDepartment() {
    console.log('Add department');
    departmentMenu();
}

function updateDepartment() {
    console.log('Update department');
    departmentMenu();
}

function removeDepartment() {
    console.log('Remove department');
    departmentMenu();
}
// =========================================================================

// Runs menu for department options
function departmentMenu() {
    inquirer.prompt(questions.departmentMenu).then((res) => {
        switch (res.choice) {
            case "View all departments":
                // Logs an array of all department names
                orm.select('name', 'departments', (result) => {
                    console.table(result);
                    departmentMenu();
                });
                break;

            case "Add department":
                addDepartment();
                break;

            case "Update department":
                updateDepartment();
                break;

            case "Remove department":
                removeDepartment();
                break;

            case "Back":
                mainMenu();
                break;
        }
    });
}

// Runs menu for role options
function roleMenu() {
    console.log('Role');
    mainMenu();
}

// Runs menu for employee options
function employeeMenu() {
    console.log('Employee');
    mainMenu();
}

// Creates main menu with options to access other menus
function mainMenu() {
    inquirer.prompt(questions.mainMenu).then((res) => {
        switch (res.choice) {
            case "Manage departments":
                departmentMenu();
                break;

            case "Manage roles":
                roleMenu();
                break;

            case "Manage employees":
                employeeMenu();
                break;

            case "Exit":
                // This function closes the connection
                orm.end();
                break;
        }
    });
}

// Initial function call
mainMenu();
