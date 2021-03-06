const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// QUESTIONS ARRAY
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
        name: "test",
        message: "Please enter any testing instructions for your application."
    },{
        type: "input",
        name: "github",
        message: "Enter your GitHub user name."
    },{
        type: "confirm",
        name: "moregithub",
        message: "Would you like to add an additional Github user?"
    },{
        type: "input",
        name: "github2",
        message: "Please enter an additional GitHub user name.",
        when: (answers) => answers.moregithub === true
    },{
        type: "input",
        name: "email",
        message: "Enter an e-mail address associated with this project."
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
        type: "input",
        name: "other",
        message: "Enter the name of the license.",
        when: (answers) => answers.license === "Other"
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

// UI VARIABLES
var ui = new inquirer.ui.BottomBar();
ui.log.write("__________WELCOME TO THE README GENERATOR__________");

// FUNCTION TO INITIALIZE PROGRAM - WHEN CALL PROMPTS USER
function init() {
    return inquirer.prompt(questions)
}

// FUNCTION CALL TO INITIATE PROGRAM AND SAVE DATA TO FILE USING GENERATEMARKDOWN.JS
init()
    .then(function(answers){
        var file = answers.title.toLowerCase().split(" ").join("");
        fs.writeFile(file + ".md", generateMarkdown(answers), function(err){
            if (err){
                return console.log(err);
            }
            console.log("File " + file + ".md has been created succesfully!")
        });
    })
    .catch(function(err){
        console.log(err);
    });