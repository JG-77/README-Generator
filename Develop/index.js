//Included packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//function using promise to write README
const writeToFile = util.promisify(fs.writeFile);

//Created an array prompt of questions for user input
const askPromt= () => {
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
            type: 'checkbox', //or list??
            name: 'license',
            message: 'What license will you be using for this app?',
            choices: ['Apache License 2.0','GNU General Public License (GPL)','GNU Library or "Lesser" General Public License (LGPL)','GNU AGPLv3','MIT license','Boost Software License 1.0','The Unlicense','Mozilla Public License 2.0','None (Unlicensed)'],
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

//function to initialize inquirer prompt
const init = () => {
    askPromt()
    .then((data) => writeToFile('README_.md', generateMarkdown(data))) 
    .then(() => console.log('Successfully generated README file'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();