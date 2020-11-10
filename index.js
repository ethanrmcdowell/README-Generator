const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "contributors",
        message: "Welcome to the README generator! Please enter the names for all contributors on the project."
    },{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },{
        type: "input",
        name: "description",
        message: "Please enter a description of your project!"
    },{
        type: "input",
        name: "install",
        message: "Provide any installation instructions you have."
    },{
        type: "input",
        name: "usage",
        message: "Provide any usage information you have."
    },{
        type: "input",
        name: "github",
        message: "Enter your GitHub user name."
    },{
        type: "input",
        name: "test",
        message: "Please enter any testing instructions for your application."
    },{
        type: "list",
        name: "license",
        message: "Choose an option regarding licensure for your project.",
        choices: [
            "Apache License v2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Other",
            "None"
        ]
    },{
        type: "number",
        name: "year",
        message: "Please enter the 4-digit copyright year.",
        when: (answers) => answers.license !== "None"
    },{
        type: "input",
        name: "name",
        message: "Enter the name of the copyright owner.",
        when: (answers) => answers.license !== "None"
    }
];

var ui = new inquirer.ui.BottomBar();
ui.log.write("__________WELCOME TO THE README GENERATOR__________");

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}

// function call to initialize program
init()
    .then(function(answers){
        var file = answers.title.toLowerCase().split(" ").join("");
        fs.writeFile(file + ".md", generateMarkdown(answers), function(err){
            if (err){
                return console.log(err);
            }
        });
    })
    .catch(function(err){
        console.log(err);
    });