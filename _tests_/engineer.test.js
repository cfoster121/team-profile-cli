const Engineer = require("../lib/engineer");

describe("GitHub username", () => {
    it("Should return the GitHub username entered into CLI", () => {
        expect(new Engineer("bob, 32, bob@bob.com, bob123").toBe("bob123"));
    })
})


