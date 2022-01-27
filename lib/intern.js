const Employee = require('./employee/')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    
    }
}

// const eng = new Engineer('bob', 'eng', 'bob@bob', 'bob.git')
// console.log("test")