// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions= () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'What is the title of your README File?',
          },
          {
            type: 'input', 
            name: 'description',
            message: 'Please write a description of your application.',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'installation',
            message: 'What are the steps to installing this application?',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'usage',
            message: 'What is the usage information of this app?',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'contribution',
            message: 'What are the contribution guidelines for this application?',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'test',
            message: 'What are the instructions for testing this app?',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'license',
            message: 'What license will you be using for this app?',
            choices: ['Apache License 2.0',
                'GNU General Public License (GPL)',
                'GNU Library or "Lesser" General Public License (LGPL)',
                'GNU AGPLv3',
                'MIT license',
                'Boost Software License 1.0',
                'The Unlicense',
                'Mozilla Public License 2.0'],
          },
          {
            type: 'input', 
            name: 'github',
            message: 'What is your GitHub username?',
            default: 'N/A',
          },
          {
            type: 'input', 
            name: 'email',
            message: 'What is your email?',
            default: 'N/A',
          },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();