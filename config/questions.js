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
            choices: ['View all departments', 'Add department', 'Update department', 'Remove department', 'Back']
        }
    ],
    // Choices for managing roles
    roleMenu: [

    ],
    // Choices for managing employees
    employeeMenu: [

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
