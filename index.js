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
        orm.update('name', newName, 'name', currentName, 'departments', () => {
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
    inquirer.prompt(questions.askDepartmentID).then(({id}) => {
        orm.selectWhere(['id', 'title', 'salary', 'department_id'], 'department_id', id, 'roles', (result) => {
            console.table(result);
            roleMenu();
        });
    });
}

function addRole() {
    inquirer.prompt(questions.roleInput).then(({title, salary, departmentId}) => {
        orm.add([title, salary, departmentId], ['title', 'salary', 'department_id'], 'roles', () => {
            roleMenu();
        });
    });
}

function removeRole() {
    inquirer.prompt(questions.roleInput[0]).then(({title}) => {
        orm.remove(title, 'title', 'roles', () => {
            roleMenu();
        });
    });
}

function updateRole() {
    inquirer.prompt(questions.roleInput[0]).then(({title}) => {
        inquirer.prompt(questions.updateRole).then(({column, newInfo}) => {
            orm.update(column, newInfo, 'title', title, 'roles', () => {
                roleMenu();
            });
        });
    });
}
// =========================================================================

// Functions for employee management
// =========================================================================
function viewAllEmployees() {
    orm.select(['id', 'first_name', 'last_name', 'role_id', 'manager_id'], 'employees', (result) => {
        console.table(result);
        employeeMenu();
    });
}

function viewEmployeesByRole() {
    inquirer.prompt(questions.askRoleId).then(({id}) => {
        orm.selectWhere(['id', 'first_name', 'last_name', 'role_id', 'manager_id'], 'role_id', id, 'employees', (result) => {
            console.table(result);
            employeeMenu();
        });
    });
}

function viewEmployeesByManager() {

}

function addEmployee() {
    
}

function removeEmployee() {
    
}

function updateEmployee() {

}
// =========================================================================

// Runs menu for department options
function departmentMenu() {
    inquirer.prompt(questions.departmentMenu).then(({choice}) => {
        switch (choice) {
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
    inquirer.prompt(questions.roleMenu).then(({choice}) => {
        switch (choice) {
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
    inquirer.prompt(questions.employeeMenu).then(({choice}) => {
        switch (choice) {
            case "View all employees":
                viewAllEmployees();
                break;

            case "View all employees by role":
                viewEmployeesByRole();
                break;

            case "View all employees by manager":
                viewEmployeesByManager();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Remove employee":
                removeEmployee();
                break;

            case "Update employee":
                updateEmployee();
                break;

            case "Back":
                mainMenu();
                break;
        }
    });
}

// Creates main menu with options to access other menus
function mainMenu() {
    inquirer.prompt(questions.mainMenu).then(({choice}) => {
        switch (choice) {
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
