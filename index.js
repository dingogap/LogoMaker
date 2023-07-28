const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./lib/questions.js');
const buildLogo = require('./lib/buildLogo.js');
const fileName = "./examples/logo.svg"

// Create file filename & write data to it
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

// Intialise Processing
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

// Function call to initialize app
init();