var inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Welcome to the README generator! What is the title of your project?"
    },{
        type: "input",
        name: "description",
        message: "Please enter a description of your project!"
    },{
        type: "input",
        name: "install",
        message: "Please provide any installation instructions you have."
    },{
        type: "input",
        name: "usage",
        message: "Please provide any usage information you have."
    },{
        type: "list",
        name: "license",
        message: "Please choose an option regarding licensure for your project.",
        choices: [
            "Perl",
            "MIT",
            "IBM",
            "Mozilla",
            "None"
        ]
    },{
        type: "input",
        name: "contributors",
        message: "Please list all contributors to the project."
    },{
        type: "input",
        name: "test",
        message: "Please enter any testing instructions for your application."
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
