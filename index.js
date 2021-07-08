// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');
const path = require('path');



// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt(
    [
        {
            type = 'input',
            message = "whats the title of the this readme",
            name = 'title',
            validate: (value) => { if (value) { return true } else { return 'i need data to continue' } },
        },
        {
            type: 'input',
            message: 'What are the instructions to install your application?',
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'provide instructions to proceed' } },
        },
        {

            type: 'input',
            message: 'credits?',
            name: 'credits',
            validate: (value) => { if (value) { return true } else { return 'provide instructions to proceed' } },
        },
        {
            type: 'input',
            message: 'How is this application to be used?',
            name: 'use',
            validate: (value) => { if (value) { return true } else { return 'provide data proceed' } },
        },
        {
            type: 'list',
            message: 'what licenses were used to create this application?',
            name: 'license',
            choices: ['MIT ', 'GPL', 'Apache', 'GNU'],
            validate: (value) => { if (value) { return true } else { return 'provide instructions to proceed' } },
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'provide instructions to proceed' } },
        },
        {
            type: 'input',
            message: 'email ?',
            name: 'email address',
            validate: (value) => { if (value) { return true } else { return 'provide instructions to proceed' } },
        },
    ])

    // TODO: Create a function to write README file

    .then((response) => {
        return fs.writeToFile(path.join (process.cwd(), "README.md"), generate(response));
      });

        // TODO: Create a function to initialize app
    init();
