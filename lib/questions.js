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

    ],
    // Input for adding a new role
    roleInput: [
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the salary of this role?',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Which department does this role belong to?',
            name: 'departmentName'
        }
    ],
    // Choices for managing employees
    employeeMenu: [

    ],
    // Input for adding a new employee
    employeeInput: [
        {
            type: 'input',
            message: 'What is the first name of the new employee',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the last name of the new employee',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'What role does this employee have?',
            name: 'roleName'
        },
        {
            type: 'input',
            // We use ID for this one because employee's could have the same name
            message: 'What is the ID of this employee\'s manager? (can be left blank)',
            name: 'managerID'
        }
    ],
    // A confirmation question to warn users that other data may be deleted as well
    confirm: [
        {
            type: 'confirm',
            message: 'This will delete all related information as well. Are you sure you want to continue?',
            name: 'choice'
        }
    ]
}

module.exports = questions;
