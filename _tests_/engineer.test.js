const Engineer = require("../lib/engineer");


describe("Engineer values", () => {
    it("Should give you back the name entered into the class", () => {
        let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
        let testName = newEmp.getName();
    
        expect(testName).toBe("ed")
    })
    
    it("Should give you back the name entered into the class", () => {
        let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
        let testId = newEmp.getId();
    
        expect(testId).toBe("3")
    })
    
    it("Should give you back the name entered into the class", () => {
        let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
        let testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("ed@engineer.com")
    })

    it("Should give you back the name entered into the class", () => {
        let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
        let testGH = newEmp.github;
    
        expect(testGH).toBe("edengineer")
    })

    })