const Intern = require("../lib/intern");


describe("Intern values", () => {
    it("Should give you back the name entered into the class", () => {
        let newEmp = new Intern("ingrid", "4", "ingrid@intern.com", "indiana state");
        let testName = newEmp.getName();
    
        expect(testName).toBe("ingrid")
    })
    
    it("Should give you back the ID entered into the class", () => {
        let newEmp = new Intern("ingrid", "4", "ingrid@intern.com", "indiana state");
        let testId = newEmp.getId();
    
        expect(testId).toBe("4")
    })
    
    it("Should give you back the email entered into the class", () => {
        let newEmp = new Intern("ingrid", "4", "ingrid@intern.com", "indiana state");
        let testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("ingrid@intern.com")
    })

    it("Should give you back the school entered into the class", () => {
        let newEmp = new Intern("ingrid", "4", "ingrid@intern.com", "indiana state");
        let testSchool = newEmp.getSchool();
    
        expect(testSchool).toBe("indiana state")
    })

    it("Should give you back the employee role", () => {
        let newEmp = new Intern("bob", "2", "bob@bob.com");
        let testRole = newEmp.getRole();
    
        expect(testRole).toBe("Intern")
    })


    })