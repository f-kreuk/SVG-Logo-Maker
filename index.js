//imports/requires inquirer and file system modules

const inquirer = require("inquirer");
const fs = require("fs");


//imports maxlength-inquirer prompt
//utilized following guide for this: https://snyk.io/advisor/npm-package/inquirer-maxlength-input-prompt

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


//inquirer prompt/command line questions for user

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter up to three characters of text to display in your logo.',
        maxLength: 3
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
    ])

// calls the generateSVG function to write the file
    .then((answers) => {
        generateSVG("logo.svg", answers);
    });
};


// utilized prior ReadMe assignment to help with the prompt
// function that generates the svg file syntax and writes the file

const generateSVG = (SVGFileName, answers) => {

    // starting file as an empty string    
    let stringSVG = "";
    stringSVG = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    `;

    // conditional statement to pull in characteristics of a circle, square, and triangle + shape color
    // utilized https://app.uxcel.com/courses/html-for-designers/html-svg-073 for triangle and rect dimensions

    shape();

            function shape() {
                if (answers.shape === "Circle") {
                    stringSVG += 
                    `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
                    `
                } else if (answers.shape === "Square") {
                    stringSVG += 
                    `<rect x="75" y="25" width="150" height="150" fill="${answers.shapeColor}" />
                    `
                } else {
                    stringSVG += 
                    `<polygon points="150,2 288, 200 2, 200" fill="${answers.shapeColor}" />
                    `
                };
            };

    // adds the textColor and text to the svg file syntax, stringSVG += is adding on to the existing string

    stringSVG += 
    `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    `;

    stringSVG += 
    `</svg>`;

    //uses fs module to generate the svg file and logs an error message if something goes wrong
    fs.writeFile(SVGFileName,stringSVG, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}


// function to initialize the app

const init = () => {
    promptUser()
};


// Function call to initialize app

init();

