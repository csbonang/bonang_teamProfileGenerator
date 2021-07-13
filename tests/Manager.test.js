const Manager = require('../lib/Manager'); 

describe('getRole', () => {
    it("Should return Manager", () => 
    {
        var name = "Intern"; 
        var id = "123"; 
        var email = "intern@gmail.com"; 
        var officeNumber = "456"; 
       const testManager = new Manager(name, id, email, officeNumber);
        // Assert
        expect(testManager.getRole()).toEqual('Manager');
    }); 
})