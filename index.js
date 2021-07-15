const inquirer = require("inquirer");
const fs = require("fs"); 
const Employee = require("./lib/Employee"); 
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const chalk = require("chalk"); 

// arrays are used to store user input for each occupation 
var team_engineer = []; 
var team_intern = []; 
// teamManager: it appears from the README that there is only one Manager per team so 
// assign the manager object to teamManager 
var teamManager; 

console.log("Time to build team"); 
// questions: prompts the user with the starter questions 
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

// eng_questions: prompts the user with questions for engineer 
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

// intern_questions: prompts the user with questions for intern
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

// init:: prompts the user on all questions for team members dependent on their team member 
//        choices. 
function init()
{
    // prompt the users
    inquirer.prompt(questions)
    // save the inputs 
    .then( (res) => {
        const inputs = res.team_member; 
        console.log(inputs); 
        const manager = new Manager(res.tMName, res.tMId, res.tMEmail, res.tMOfficeNumber); 
         // add new engineer 
        teamManager = manager;  
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

// questionsForEngineers:: prompts the user with questions for engineer team member 
//                         creates an engineer object that holds all the user's inputs and stores it in the object's properties 
//                         Then depending on the user's choice, questions for engineer , questions for interns, or generating the html page is called. 
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


// questionsForInterns::   prompts the user with questions for intern team member 
//                         creates an intern object that holds all the user's inputs and stores it in the object's properties 
//                         Then depending on the user's choice, questions for engineer, questions for interns, or generating the html page is called.
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

// generatePage:: generates the format for the HTML page and writes it to index.html
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
        <!--Font Awesome--> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./style.css"> 
    </head>
     <body>
       <header style="background-color:rgb(111, 162, 240);">
       My Team 
       </header>
       <div class= "wrapper"> 
        `
    
    var managerHTML = ""
      managerHTML += `
      <div class= "manager">
      <div class="card" style="width: 18rem;">
           <div class="card-header">
           ${teamManager.name} <i class="fas fa-user-check"></i>, 
           
           ${teamManager.getRole()}
           
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item"> Id: ${teamManager.id}</li>
             <li class="list-group-item">
                <a id="contactMe_info" href = "mailto:${teamManager.email}" alt=Email>
                Email: ${teamManager.email}
                </a> 
             </li>
             <li class="list-group-item"> Office number: ${teamManager.getOfficeNumber()}</li>
           </ul>
         </div>
         </div>`

    var engineerHTML = `<div class= "engineer">`
   
       for(let i = 0; i < team_engineer.length; i++)
       {
           engineerHTML += `
           <div class="card" style="width: 18rem;">
           <div class="card-header">
           ${team_engineer[i].name} <i class="fas fa-coffee"></i>,
           
           ${team_engineer[i].getRole()}
           
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">Id: ${team_engineer[i].id}</li>
             <li class="list-group-item">
                <a id="contactMe_info" href = "mailto:${team_engineer[i].email}" alt=Email>
               Email:  ${team_engineer[i].email}
                </a> 
             </li>
             <li class="list-group-item"> <a href= "https://github.com/${team_engineer[i].getGithub()}">
              GitHub: ${team_engineer[i].getGithub()} </a></li>
           </ul>
         </div>
         `
       }

       var internHTML = `
       </div>
       <div class= "intern"> `
       for(let i = 0; i < team_intern.length; i++)
       {
           internHTML += `
           <div class="card" style="width: 18rem;">
           <div class="card-header">
           ${team_intern[i].name} <i class="fas fa-user-graduate"></i>,
            
           ${team_intern[i].getRole()}
            
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item"> Id: ${team_intern[i].id}</li>
             <li class="list-group-item">
                <a id="contactMe_info" href = "mailto:${team_intern[i].email}" alt=Email>
                Email: ${team_intern[i].email}
                </a> 
             </li>
             <li class="list-group-item">School: ${team_intern[i].getSchool()}</li>
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
    var HTMLpage = openingHTML + managerHTML + engineerHTML + internHTML + closingHTML; 
     fs.writeFileSync("./dist/index.html",HTMLpage,(err,succ)=>{
        if (err) throw err;
        console.log(succ)   
     })

}
init(); 
