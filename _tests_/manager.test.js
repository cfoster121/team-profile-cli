const Manager = require("../lib/employee");

describe("Office number", () => {
    it("Should return the office number typed into inquirer prompt", () => {
        expect(new Manager("bob, 32, bob@bob.com, 123").toBe("123"));
    })
})

