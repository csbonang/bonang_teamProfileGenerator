
//Employee:: employee class is the parent class whose properties consists of 
//           name, id, and email with the appropriate getters. 
class Employee 
{
    constructor(name, id, email)
    {
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }
    
    // getName:: returns the name 
    getName() 
    {
        console.log("Name: " + this.name); 
        return this.name; 
    }

    // getEmail:: returns the email
    getEmail()
    {
        console.log("Email: " + this.email); 
        return this.email; 
    }

    // getRole:: returns the role
    getRole()
    {
        // console.log(Employee); 
        return 'Employee'; 
    }

    // printProperties:: prints all the properties 
    printProperties() 
    {
        console.log(`Name: ${this.name}`); 
        console.log(`Email: ${this.email}`); 
        console.log(`Id: ${this.id}`); 
        
    }
   
}
// ensures that we are able to import 
module.exports = Employee; 
// Diagnostics 
    // const employee = new Employee("Carl", "123", "cbonne@gmail.com"); 
    // employee.getName(); 
    // employee.getEmail();
    // employee.getRole();
    // employee.printProperties();  
