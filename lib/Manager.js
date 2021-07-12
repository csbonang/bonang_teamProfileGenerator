const Employee = require('./Employee'); 
// Manager:: class that extends Employee.
//          holds the same properties with the addition of officeNumber. 
class Manager extends Employee {
    // constructor(officeNumber)
    constructor(officeNumber)
    {
        const name = "Jules"; 
        const id = 123; 
        const email = "bonne@gmail.com"; 
        // constructor(name, id, email, officeNumber)
        // calls the parent constructor with 
        // name, id, email provided 
        // avoid duplicating the contructor's parts between Employee and Manager 
        // get access to parent's properties 
        // this.officeNumber = officeNumber; 
        super(name, id, email); 
        // this.name = name; 
        // this.id = id; 
        // this.email = email; 
        // needed 
        this.officeNumber = officeNumber; 

    }
    // officeNumber 
    // getRole() overridden to return Manager 
    // the super keyword can be used to call functions on a parent's object 

    // getRole()
    // {
    //     super.getRole(); 
    //     return Manager; 
    // }
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