// Imports all necessary files and libraries
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const orm = require('./config/orm');
const questions = require('./lib/questions');

// Functions for department management
// =========================================================================
function addDepartment() {
    inquirer.prompt(questions.departmentInput).then((res) => {
        orm.add(res.name, 'name', 'departments', () => {
            departmentMenu();
        });
    });
}

function removeDepartment() {
    inquirer.prompt(questions.departmentInput).then((res) => {
        orm.remove(res.name, 'name', 'departments', () => {
            departmentMenu();
        });
    });
}

function updateDepartment() {
    inquirer.prompt(questions.departmentUpdate).then((res) => {
        orm.update('name', res.newName, res.currentName, 'departments', () => {
            departmentMenu();
        });
    });
}
// =========================================================================

// Functions for role management
// =========================================================================

// =========================================================================

// Functions for employee management
// =========================================================================

// =========================================================================

// Runs menu for department options
function departmentMenu() {
    inquirer.prompt(questions.departmentMenu).then((res) => {
        switch (res.choice) {
            case "View all departments":
                // Logs a table of all department info
                orm.select(['id', 'name'], 'departments', (result) => {
                    console.table(result);
                    departmentMenu();
                });
                break;

            case "Add department":
                addDepartment();
                break;

            case "Remove department":
                removeDepartment();
                break;

            case "Update department":
                updateDepartment();
                break;

            case "Back":
                mainMenu();
                break;
        }
    });
}

// Runs menu for role options
function roleMenu() {
    inquirer.prompt(questions.roleMenu).then((res) => {
        switch (res.choice) {
            case "View all roles":
                // Logs a table of all role information
                orm.select(['id', 'title', 'salary', 'department_id'], 'roles', (result) => {
                    console.table(result);
                    roleMenu();
                });
                break;

            case "View all roles by department":
                inquirer.prompt(questions.askDepartmentID).then((res) => {
                    orm.selectWhere(['id', 'title', 'salary', 'department_id'], 'department_id', res.id, 'roles', (result) => {
                        console.table(result);
                        roleMenu();
                    });
                });
                break;

            case "Add role":
                addDepartment();
                break;

            case "Update role":
                updateDepartment();
                break;

            case "Remove role":
                remove();
                break;

            case "Back":
                mainMenu();
                break;
        }
    });
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
