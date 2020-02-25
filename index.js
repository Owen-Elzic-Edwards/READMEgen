const inquire = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const api = require("./utils/api")

const questions = [
     {
        type: "input",
        message: "What is your Github username?",
        name: "username"
     },
     {
        type: "input",
        message: "What is the name of this project?",
        name: "title"
     },
     {
        type: "input",
        message: "Provide a short description of your project",
        name: "description"
     },
     {
        type: "list",
        message: "Please select a license",
        choices: ["MIT", "UNLICENSED", "GNU GPLv3"],
        name: "license"
     },
     {
        type: "input",
        message: "How do you install your project?",
        name: "install"
     },
     {
        type: "input",
        message: "How do you use your project?",
        name: "usage"
     },
     {
        type: "input",
        message: "How do you want people to contribute?",
        name: "contribute"
     },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log("error:", err) : console.log("success"));
}

function init() {
inquire.prompt(questions).then( response => {
        api.getUser(response.username, userData => {
             const markDown = generate.generateMarkdown(response, userData);
            writeToFile("./genREADME.md", markDown);
        }).catch(err => console.log("error:", err));
    }).catch(err => console.log("error:", err));

}




init();
