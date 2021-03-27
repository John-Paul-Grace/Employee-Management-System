const questions = {
    // A list of options to form the main menu
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menuChoice',
            choices: ['Manage departments', 'Manage roles', 'Manage employees', 'Exit']
        }
    ],

    // A confirmation question to warn users that other data may be deleted as well
    confirmation: [
        {
            type: 'list',
            message: 'This will delete all related information as well. Are you sure you want to continue?',
            name: 'choice',
            choices: ['Continue', 'Cancel']
        }
    ]
}

module.exports = questions;
