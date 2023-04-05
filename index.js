const inquirer = require('inquirer'); //makes the program use inquirer -DT
const fs = require('fs'); //allows progam to make and read files -DT

inquirer
  .prompt([
    {
      type: 'input', //user input type -DT
      message: 'Please enter 3 characters', //text shown in the terminal -DT
      name: 'text', //custom name chosen by me for orgranizational purposes -DT
    },
    {
      type: 'input',
      message: 'What color would you like the text?',
      name: 'text-color',
    },
    {
      type: 'input',
      message: 'What color would you like the logo?',
      name: 'logo-color',
    },
    {
        type: 'list', //this is a list option for users. -DT
        message: 'What shape would you like?',
        name: 'shape',
        choices: ['circle','square','triangle'], //This gives users the options to move the cursor and pick either one. 
      },   
  ])