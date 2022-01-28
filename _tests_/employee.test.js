const Employee = require("../lib/employee");

describe("Get name", () => {
    it("Should return the name typed into inquirer prompt", () => {
        expect(new Employee("bob").toBe("bob"));
    })
})

describe("Get ID", () => {
    it("Should return the ID typed into inquirer prompt", () => {
        expect(new Employee("bob, 32").toBe("32"));
    })
})

describe("Get email", () => {
    it("Should return the email typed into inquirer prompt", () => {
        expect(new Employee("bob, 32, bob@bob.com").toBe("bob@bob.com"));
    })
})
