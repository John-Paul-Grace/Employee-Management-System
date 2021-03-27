// Imports all necessary files and libraries
const inquirer = require('inquirer');
const orm = require('./config/orm');
const questions = require('./config/questions');

// Runs menu for department options
function departmentMenu() {
    console.log('Department');
    mainMenu();
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
        switch (res.menuChoice) {
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
