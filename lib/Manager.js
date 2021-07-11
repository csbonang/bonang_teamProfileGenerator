const Employee = require('./Employee'); 
// Manager:: class that extends Employee.
//          holds the same properties with the addition of officeNumber. 
class Manager extends Employee{
    constructor(name, id, email, officeNumber)
    {
        // calls the parent constructor with 
        // name, id, email provided 
        // avoid duplicating the contructor's parts between Employee and Manager 
        super(name, id, email); 
        this.officeNumber = officeNumber; 

    }
    // officeNumber 
    // getRole() overridden to return Manager 
    // the super keyword can be used to call functions on a parent's object 

    getRole()
    {
        return Manager; 
    }
} 