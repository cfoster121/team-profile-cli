class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    };

    getName() {
        console.log(`${this.name}`)
    }

    getId() {
        console.log(`${this.id}`)
    }

    getEmail() {
        console.log(`${this.email}`)
    }
}

//   function getRole() {
//         return employee
//     }

    const bob = new Employee('bob', 'manager', 'bob@bob.com')
    console.log(bob)
    // bob.getRole()