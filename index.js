const inquirer = require("inquirer");
const fs = require("fs"); 
const Employee = require("./lib/Employee"); 
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const chalk = require("chalk"); 

// create arrays to store user input for each occupation 
var team_engineer = []; 
var team_intern = []; 
var team_manager = []; 


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
            questionsForInterns(); 
        }
        else 
        {
            generatePage(); 
        }
      


    })
    
}

function questionsForEngineers()
{
     // prompt the user 
     inquirer.prompt(eng_questions)
     .then((resEngineer) => {
         const engineer = new Engineer(resEngineer.engName, resEngineer.engId, resEngineer.engEmail, resEngineer.engGitHub); 
         // add new engineer 
         team_engineer.push(engineer); 
         
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
         else 
         {
             generatePage(); 
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
         intern.printProperties(); 
         team_intern.push(intern); 
         if (resIntern.team_member == "Engineer") 
         {
             questionsForEngineers(); 
             
         }
         else if(resIntern.team_member == "Intern")
         {
             questionsForInterns(); 
         }
         else
         {
             generatePage(); 
         }
     })
}

function generatePage()
{
   // template HTML 
   var openingHTML = `<!DOCTYPE html>
   <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Team Profile Generator</title>
       <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"> 
    </head>
     <body>
       <header style="background-color:red;">
       My Team 
       </header>
       <div class= "wrapper"> 
       <div class= "engineer"> `
    var engineerHTML = ""
   
       for(let i = 0; i < team_engineer.length; i++)
       {
           engineerHTML += `
           <div class="card" style="width: 18rem;">
           <div class="card-header">
           ${team_engineer[i].name}
           ${team_engineer[i].getRole()}
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">${team_engineer[i].id}</li>
             <li class="list-group-item">${team_engineer[i].email}</li>
             <li class="list-group-item">${team_engineer[i].getGithub()}</li>
           </ul>
         </div>
         `
       }

       var internHTML = `<div class= "intern"> `
       for(let i = 0; i < team_intern.length; i++)
       {
           internHTML += `
           <div class="card" style="width: 18rem;">
           <div class="card-header">
           ${team_intern[i].name}
           ${team_intern[i].getRole()}
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">${team_intern[i].id}</li>
             <li class="list-group-item">${team_intern[i].email}</li>
             <li class="list-group-item">${team_intern[i].getSchool()}</li>
           </ul>
         </div>
         `
       }

    var closingHTML =` </div>
                        </div> 
                        </body>   </html>`
    // TODO: repeat for intern, ask if there are more than 1 manager
    // write to file  
    // var HTMLpage = openingHTML + engineerHTML + internHTML + closingHTML
    var HTMLpage = openingHTML + engineerHTML + internHTML + closingHTML; 
     fs.writeFileSync("./dist/index.html",HTMLpage,(err,succ)=>{
        if (err) throw err;
        console.log(succ)   
     })

}
init(); 
