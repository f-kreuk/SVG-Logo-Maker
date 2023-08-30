//imports inquirer and file system modules

const inquirer = require("inquirer");
const fs = require("fs");
const {writeFile} = require('fs').promises;

//imports shapes classes

const {Triangle, Square, Circle} = require("./lib/shapes");

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

// utilized prior ReadMe assignment to help with the prompt
// function that generates the svg file syntax

const generateSVG = ({text, textColor, shape, shapeColor}) => {

    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

    // conditional statement to pull in characteristics of a circle, square, and triangle
    // utilized https://app.uxcel.com/courses/html-for-designers/html-svg-073 for triangle and rect

    if (answers.shape === "Circle") {
        `<circle cx="150" cy="100" r="80" `
    } else if (answers.shape === "Square") {
        `<rect x="100" y="50" width="150" height="150" `
    } else {
        `<polygon points="90,0 180, 200 0, 200" `
    }
    
    // adds the shapeColor, textColor, and text to the svg file syntax

    `fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}


// function to initialize the app

const init = () => {
    promptUser()
    .then((answers) => writeFile('logo.svg',generateSVG(answers)))
    .then(() => console.log('Successfully generated logo.svg'))
    .catch((err) => console.error(err));    
};

// Function call to initialize app

init();

