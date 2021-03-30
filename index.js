// Imports all necessary files and libraries
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const orm = require('./config/orm');
const questions = require('./lib/questions');

// Functions for department management
// =========================================================================
function viewDepartments() {
    orm.select(['id', 'name'], 'departments', (result) => {
        console.table(result);
        departmentMenu();
    });
}

function addDepartment() {
    inquirer.prompt(questions.departmentInput).then(({name}) => {
        orm.add(name, 'name', 'departments', () => {
            departmentMenu();
        });
    });
}

function removeDepartment() {
    inquirer.prompt(questions.departmentInput).then(({name}) => {
        orm.remove(name, 'name', 'departments', () => {
            departmentMenu();
        });
    });
}

function updateDepartment() {
    inquirer.prompt(questions.departmentUpdate).then(({newName, currentName}) => {
        orm.update('name', newName, currentName, 'departments', () => {
            departmentMenu();
        });
    });
}
// =========================================================================

// Functions for role management
// =========================================================================
function viewAllRoles() {
    orm.select(['id', 'title', 'salary', 'department_id'], 'roles', (result) => {
        console.table(result);
        roleMenu();
    });
}

function viewRolesByDepartment() {
    inquirer.prompt(questions.askDepartmentID).then((res) => {
        orm.selectWhere(['id', 'title', 'salary', 'department_id'], 'department_id', res.id, 'roles', (result) => {
            console.table(result);
            roleMenu();
        });
    });
}

function addRole() {
    inquirer.prompt(questions.roleInput).then(({name, salary, departmentId}) => {
        orm.add([name, salary, departmentId], ['title', 'salary', 'department_id'], 'roles', () => {
            roleMenu();
        });
    });
}

function removeRole() {
    
}

function updateRole() {
    
}
// =========================================================================

// Functions for employee management
// =========================================================================

// =========================================================================

// Runs menu for department options
function departmentMenu() {
    inquirer.prompt(questions.departmentMenu).then((res) => {
        switch (res.choice) {
            case "View all departments":
                viewDepartments();
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
                viewAllRoles();
                break;

            case "View all roles by department":
                viewRolesByDepartment();
                break;

            case "Add role":
                addRole();
                break;

            case "Remove role":
                removeRole();
                break;

            case "Update role":
                updateRole();
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
