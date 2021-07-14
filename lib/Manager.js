const Employee = require('./Employee'); 
// Manager:: class that extends Employee.
//          holds the same properties with the addition of officeNumber. 
class Manager extends Employee {
    // constructor(officeNumber)
    constructor(name, id, email, officeNumber)
    { 
        super(name, id, email); 
        this.name = name; 
        this.id = id; 
        this.email = email; 
        // needed 
        this.officeNumber = officeNumber; 

    }
   
    // getRole:: returns the role, 'Manager'
    getRole()
    {
        // super.getRole(); 
        return 'Manager'; 
    }

    // getOfficeNumber:: returns the office number 
    getOfficeNumber()
    {
        return this.officeNumber; 
    }
} 
// ensures that we are able to import 
module.exports = Manager; 
// diagnostics 
    // var manager = new Manager('234'); 
    // // var manager = new Manager('234'); 
    // manager.getName();
    // manager.getEmail(); 
    // manager.printProperties(); 
    // manager.getRole(); 