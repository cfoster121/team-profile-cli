var fs = require('fs');

var inquirer = require('inquirer');

const validAns = 

console.log("\n***\n Welcome to Team Profile generator! \nType your response to each prompt and press enter to submit. \n***\n")

inquirer
    .prompt([
        {
            message: 'Manager name:',
            type: 'input',
            name: 'man-name',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a name")
                }
            }
        },
        {
            message: 'Manager ID:',
            type: 'input',
            name: 'man-id',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an ID")
                }
            }
        },
        {
            message: 'Manager email address:',
            type: 'input',
            name: 'man-email',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an email")
                }
            }
        },
        {
            message: 'Manager office number:',
            type: 'input',
            name: 'man-office',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an office number")
                }
            }
        },
        {
            message: 'Choose next employee below:',
            type: 'list',
            name: 'add-emp',
            choices: [
                "Intern",
                "Engineer",
                "I am finished",
            ]
        }])
.then((r) => {
    console.log(r)
})

/*
1 - create employee class
2 - create engineer, intern, manager, extension classes
3 - create tests for each class
4 - run tests for each class
5 - create cli prompts
6 - create html skeleton
7 - run cli to make functioning html page
*/