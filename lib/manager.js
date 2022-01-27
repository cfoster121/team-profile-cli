const Employee = require('./employee/')

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    
    }
}

// const eng = new Engineer('bob', 'eng', 'bob@bob', 'bob.git')
// console.log("test")