const Employee = require('./Employee'); 
// Engineer:: class that extends Employee.
//          holds the same properties with the addition of github. 
class Engineer extends Employee{
    constructor(name, id, email, github)
    {
        // calls the parent constructor with 
        // name, id, email provided 
        // avoid duplicating the contructor's parts between Employee and Manager 
        super(name, id, email); 
        this.github = github; 
    }
    
    getGithub()
    {
        return this.github; 
    }
    getRole()
    {
        // super.getRole(); 
        return Engineer; 
    }
} 

module.exports = Engineer;  
// diagnostics 
// var engineer = new Engineer('Bob', '149', 'bob@gmail.com', 'bonang8')  
// engineer.getRole(); 