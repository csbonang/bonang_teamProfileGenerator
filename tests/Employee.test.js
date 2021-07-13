
const Employee = require('../lib/Employee'); 

describe('getName', () => {
    it("Should return name value", () => 
    {
        var name = "Employee"; 
        var id = "123"; 
        var email = "employee@gmail.com"; 
        const testEmployee = new Employee(name, id, email);
        // Assert
        expect(testEmployee.getName()).toEqual(name);
    }); 
    
}); 

describe('getEmail', () => {
    it("Should return email", () => 
    {
        var name = "Employee"; 
        var id = "123"; 
        var email = "employee@gmail.com"; 
        const testEmployee = new Employee(name, id, email);
        // Assert
        expect(testEmployee.getEmail()).toEqual(email);
    }); 
}); 

describe ('getRole', () =>{
    
    it("Should return employee", () => 
    {
        var name = "Employee"; 
        var id = "123"; 
        var email = "employee@gmail.com"; 
        const testEmployee = new Employee(name, id, email);
        // Assert
        expect(testEmployee.getRole()).toEqual('Employee');
    }); 
});

// describe('Todo', () => {
//   describe('Initialization', () => {
//     // Positive test
//     it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
//       // Arrange
//       const text = 'Pick up milk';

//       // Act
//       const obj = new Todo(text);

//       // Assert
//       expect(obj.text).toEqual(text);
//     });

//     // Exception test
//     it("should throw an error if not provided a 'text' value", () => {
//       // Arrange
//       const cb = () => new Todo();
//       const err = new Error(
//         "Expected parameter 'text' to be a non empty string"
//       );

//       // Assert
//       expect(cb).toThrowError(err);
//     });
//   });
// });
