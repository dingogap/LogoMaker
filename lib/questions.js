// Prompt for logo text, text colour, logo shape & logo colour
const questions = [
    {
        name: "logoText",
        type: "input",
        message: "Enter Logo Text (at least 1 character & no more than 3 characters):",
        validate: (answer) => {
            if (answer.length > 3 || answer.length === 0) {
                return console.log("Please enter the Text for the Logo (at least 1 character & no more than 3 characters)");
            }
            return true;
        },
    },
    {
        name: "logoTextColour",
        type: "input",
        message: "Enter Logo Text Colour (colour keyword or hexadecimal number)",
        validate: (answer) => {
            if (answer.length === 0) {
                return console.log("Please enter the Colour of the Logo Text:");
            } else {
                return true;
            }
        }
    },
    {
        name: "logoShape",
        type: "list",
        message: "Enter the shape of the Logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        name: "logoColour",
        type: "input",
        message: "Enter Logo Colour (colour keyword or hexadecimal number)",
        validate: (answer) => {
            if (answer.length === 0) {
                return console.log("Please enter the Colour of the Logo:");
            } else {
                return true;
            }
        }
    },
]
module.exports = questions;