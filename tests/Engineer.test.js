const Engineer = require('../lib/Engineer');

describe ('getRole', () =>{
    
    it("Should return emial value value", () => 
    {
        var name = "Engineer"; 
        var id = "123"; 
        var email = "employee@gmail.com"; 
        var github = "bonang8";
        const testEngineer = new Engineer(name, id, email, github);
        // Assert
        expect(testEngineer.getRole()).toEqual('Engineer');
    }); 
})

describe ('getGitHub', () => {
    it("Should return GitHub username", () => 
    {
        var name = "Engineer"; 
        var id = "123"; 
        var email = "employee@gmail.com"; 
        var github = "bonang8"        
        const testEngineer = new Engineer(name, id, email, github);
        // Assert
        expect(testEngineer.getGithub()).toEqual(github);
    }); 

})
