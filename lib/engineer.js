const Employee = require('./employee/')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    
    }
}

module.exports = Engineer

const eng = new Engineer('bob', 'eng', 'bob@bob', 'bob.git')
console.log("test")