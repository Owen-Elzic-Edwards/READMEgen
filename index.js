var inquire = require("inquirer");
var fs = require("fs");
var generate = require("./utils/generateMarkdown");
var api = require("./utils/api")

const questions = [

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log("error:", err) : console.log("success"));
}

function init() {
inquire.prompt([
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
     }
    ]).then( response => {
        api.getUser(response.username, userData => {
             var markDown = generate.generateMarkdown(response, userData);
            writeToFile("./genREADME.md", markDown);
        });
    }).catch(err =>console.log("error: " + err));

}




init();
