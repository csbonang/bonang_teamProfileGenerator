const inquirer = require("inquirer");
const fs = require("fs"); 

// prompt the user: array of objects 
console.log("Time to build team"); 

const questions = [
    {
        type: "input", 
        message: "What is the team manager's name? ", 
        name: 'tMName'
    },
    {
        type: "input", 
        message: "What is the team manager's id? ", 
        name: "tMId"
    },
    {
        type: "input", 
        message: "What is the team manager's email? ", 
        name: "tMEmail"
    },
    {
        type: "input", 
        message: "What is the team manager's office number? ", 
        name: "tMOfficeNumber"
    },
    {
        type: "list", 
        message: "Which type of team member would you like to add? ", 
        name: "team_member", 
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    },
]

function init()
{
    inquirer.prompt(questions); 
}
init(); 
/* Command line application 
    1. Enter the team manager's 
        Ask for Name 
        Position 
        Id
        Email 
        GitHub 
    2. Menu appears and exit option
        Engineer 
        Intern 
        Exit 

    3. Fill position 
   if Position == Engineer 
        Ask for Name 
        Position 
        Id
        Email 
        GitHub 
    else if Position == Intern
         Ask for Name 
        Position 
        Id
        Email 
        School 
    4. Menu appears and exit option
         Engineer 
         Intern 
         Exit 

*/ 