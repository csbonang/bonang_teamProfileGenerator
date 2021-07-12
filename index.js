const inquirer = require("inquirer");
const fs = require("fs"); 
const Employee = require("./lib/Employee"); 
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const chalk = require("chalk"); 


// prompt the user: array of objects 
console.log("Time to build team"); 

const questions = [
    {
        type: "input", 
        message: chalk.rgb(249, 38, 249)("What is the team manager's name? "), 
        name: 'tMName'
    },
    {
        type: "input", 
        message: chalk.blue("What is the team manager's id? "), 
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
    }
]

// questions for engineer 
// Ask for 
// Name 
// Id
// Email 
// GitHub 
const eng_questions = [
    {
        type: "input",
        message: "Please Enter engineer's name: ",
        name: "engName"
    },
    {
        type: "input",
        message: "Please Enter engineer's id number: ",
        name: "engId"
    },
    {
        type: "input",
        message: "Please Enter engineer's email ",
        name: "engEmail"
    },
    {
        type: "input",
        message: "Please Enter engineer's GitHub username: ",
        name: "engGitHub"
    },
    {
        type: "list", 
        message: "Which type of team member would you like to add? ", 
        name: "team_member", 
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    }
]


const intern_questions = [
    {
        type: "input",
        message: "Please Enter intern's name: ",
        name: "internName"
    },
    {
        type: "input",
        message: "Please Enter intern's id number: ",
        name: "internId"
    },
    {
        type: "input",
        message: "Please Enter intern's email ",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Please Enter the intern's school ",
        name: "internSchool"
    },
    {
        type: "list", 
        message: "Which type of team member would you like to add? ", 
        name: "team_member", 
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    }
]


function init()
{
    // prompt the users
    inquirer.prompt(questions)
    // save the inputs 
    .then( (res) => {
        const inputs = res.team_member; 
        console.log(inputs); 
        if (res.team_member == "Engineer") 
        {
            questionsForEngineers(); 
            
        }
        else if(res.team_member == "Intern")
        {
            questionsForIntern(); 
        }
      


    })
    
}

function questionsForEngineers()
{
     // prompt the user 
     inquirer.prompt(eng_questions)
     .then((resEngineer) => {
         const engineer = new Engineer(resEngineer.engName, resEngineer.engId, resEngineer.engEmail, resEngineer.engGitHub); 
         // diagnostics 
         engineer.printProperties(); 
         if (resEngineer.team_member == "Engineer") 
         {
             questionsForEngineers(); 
             
         }
         else if(resEngineer.team_member == "Intern")
         {
             questionsForInterns(); 
         }
     })

}
function questionsForInterns()
{
     // prompt the user 
     inquirer.prompt(intern_questions)
     .then((resIntern) => {
         const intern = new Intern(resIntern.internName, resIntern.internId, resIntern.internEmail, resIntern.internSchool); 
         // diagnostics 
         engineer.printProperties(); 
         if (resIntern.team_member == "Engineer") 
         {
             questionsForEngineers(); 
             
         }
         else if(resIntern.team_member == "Intern")
         {
             questionsForInterns(); 
         }
     })
}
init(); 
