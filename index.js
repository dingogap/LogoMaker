// Reference Packages
const inquirer = require("inquirer");
const fs = require("fs");
const logoDefintion = require('./lib/svgStructure.js')

// Include external js files
const questions = require('./lib/questions.js');
const buildLogo = require('./lib/buildLogo.js');

// Declare variables
const fileName = "./examples/logo.svg"

// Start Processing
init();

// Intialise Processing - Ask Questions & when answered generate the logo code & write it to file 
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            return buildLogo(answers);
        })
        .then((data) => {
            writeToFile(fileName, data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Create file filename & write logo data to it
// Log success to console
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} created successfully`);
        }
    });
}