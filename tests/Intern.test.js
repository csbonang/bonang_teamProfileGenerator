const Intern = require('../lib/Intern'); 

describe('getSchool', () => {
    it("Should return school value", () => 
    {
        var name = "Intern"; 
        var id = "123"; 
        var email = "intern@gmail.com"; 
        var school = "chapman"; 
        const testIntern = new Intern(name, id, email, school);
        // Assert
        expect(testIntern.getSchool()).toEqual(school);
    });

})

describe ('getRole', () =>{
    
    it("Should return intern", () => 
    {
        var name = "Intern"; 
        var id = "123"; 
        var email = "intern@gmail.com"; 
        var school = "chapman"; 
        const testIntern = new Intern(name, id, email, school);
        // Assert
        expect(testIntern.getRole()).toEqual('Intern');
    }); 
}) 
