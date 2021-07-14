const Employee = require('./Employee'); 
// Intern:: class that extends Employee.
//          holds the same properties with the addition of school. 
class Intern extends Employee{
    constructor(name, id, email, school)
    {
        // calls the parent constructor with 
        // name, id, email provided 
        // avoid duplicating the contructor's parts between Employee and Manager 
        super(name, id, email); 
        this.school = school; 
    }
    
    // getSchool:: returns school
    getSchool()
    {
        return this.school; 
    }

    //getRole:: returns role, 'Intern'
    getRole()
    {
        return 'Intern'; 
    }
} 

module.exports = Intern;  