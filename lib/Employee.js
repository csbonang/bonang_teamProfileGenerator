
// name
// id 
// email 
// getName 
// getEmail 
// getRole 

class Employee 
{
    constructor(name, id, email)
    {
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }

    getName() 
    {
        console.log("Name: " + this.name); 
        return this.name; 
    }
    getEmail()
    {
        console.log("Email: " + this.email); 
        return this.email; 
    }
    getRole()
    {
        // console.log(Employee); 
        return 'Employee'; 
    }
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
