//imports inquirer and file system modules

const inquirer = require("inquirer");
const fs = require("fs");

//inquirer prompt/command line questions for user

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters of text to display in your logo.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Select your text color by entering a color keyword or submitting a hexadecimal number.',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for your logo.',
        choices: [
            "Triangle",
            "Square",
            "Circle"
        ]
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Select your shape color by entering a color keyword or submitting a hexadecimal number.',
      },
    ]); 
};

// function to initialize the app

const init = () => {
    promptUser()
};

// Function call to initialize app

init();

