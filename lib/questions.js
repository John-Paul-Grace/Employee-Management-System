const questions = {
    // A list of options to form the main menu
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['Manage departments', 'Manage roles', 'Manage employees', 'Exit']
        }
    ],
    // Choices for managing departments
    departmentMenu: [
        {
            type: 'list',
            message: 'Department options:',
            name: 'choice',
            choices: ['View all departments', 'Add department', 'Remove department', 'Update department', 'Back']
        }
    ],
    // Input for adding and removing a department
    departmentInput: [
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'name'
        }
    ],
    // Input for updating a department
    departmentUpdate: [
        {
            type: 'input',
            message: 'What is the current name of the department?',
            name: 'currentName'
        },
        {
            type: 'input',
            message: 'What is the new name of the department?',
            name: 'newName'
        }
    ],
    // Choices for managing roles
    roleMenu: [
        {
            type: 'list',
            message: 'Role options:',
            name: 'choice',
            choices: ['View all roles', 'View all roles by department', 'Add role', 'Remove role', 'Update role', 'Back']
        }
    ],
    // Ask for department id to group roles
    askDepartmentID: [
        {
            type: 'input',
            message: 'What is the id of the department?',
            name: 'id'
        }
    ],
    // Input for adding a new role
    roleInput: [
        {
            type: 'input',
            message: 'What is the title of the role?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the salary of this role?',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'What is the id of the deparment that this role belongs to?',
            name: 'departmentId'
        }
    ],
    // Asks the user which piece of role info to update
    updateRole: [
        {
            type: 'list',
            message: 'Which role info do you want to update?',
            name: 'column',
            choices: ['Title', 'Salary', 'Department ID']
        },
        {
            type: 'input',
            message: 'What would you like to change this to?',
            name: 'newInfo'
        }
    ],
    // Choices for managing employees
    employeeMenu: {
            type: 'list',
            message: 'Employee options:',
            name: 'choice',
            choices: ['View all employees', 'View all employees by role', 'View all employees by manager', 'Add employee', 'Remove employee', 'Update employee', 'Back']
        },
    // Ask for a role's id to sort employees
    askRoleId: {
        type: 'input',
        message: 'What is the role\'s id?',
        name: 'id'
    },
    // Ask for a manager's id to sort employees
    askManagerId: {
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'id'
    },
    // Input for adding a new employee
    employeeInput: [
        {
            type: 'input',
            message: 'What is the first name of the new employee?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the last name of the new employee?',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'What is the id for the role that this employee have?',
            name: 'roleId'
        },
        {
            type: 'input',
            message: 'What is the ID of this employee\'s manager? (can be left blank)',
            name: 'managerId'
        }
    ],
    // A confirmation question to warn users that other data may be deleted as well
    confirm: [
        {
            type: 'confirm',
            message: 'This will delete all related information as well. Are you sure you want to continue?',
            name: 'confirm'
        }
    ]
}

module.exports = questions;
