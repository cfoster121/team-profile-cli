var fs = require('fs');
var inquirer = require('inquirer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

var outputAns = []

console.log("\n***\n Welcome to Team Profile generator! \nType your response to each prompt and press enter to submit. \n***\n")

var managerInf =
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
                name: 'add',
                choices: [
                    "Intern",
                    "Engineer",
                    "I am finished",
                ]
            }

        ])
        .then((r) => {
            outputAns.push(r)
            if (r.add == "Intern") {
                addIntern()
            }
            else if (r.add == "Engineer") {
                addEngineer();
            }
            else {
                console.log("done")
                return outputAns,
                console.log(outputAns)

            }
        })

function addIntern() {
    inquirer.prompt([
        {
            message: "Intern name:",
            type: "input",
            name: "intName",
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
            message: "Intern ID:",
            type: "input",
            name: "intId",
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
            message: "Intern email:",
            type: "input",
            name: "intEmail",
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
            message: "Intern school:",
            type: "input",
            name: "intSchool",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a school")
                }
            }
        },
        {
            message: 'Choose next employee below:',
            type: 'list',
            name: 'add',
            choices: [
                "Intern",
                "Engineer",
                "I am finished",
            ]
        }])


        .then((r) => {
            outputAns.push(r)
            if (r.add == "Intern") {
                addIntern();
            }
            else if (r.add == "Engineer") {
                addEngineer();
            }
            else {
                console.log("done")
                return outputAns,
                console.log(outputAns)

            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                message: "Engineer name:",
                type: "input",
                name: "engName",
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
                message: "Engineer ID:",
                type: "input",
                name: "engId",
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
                message: "Engineer email:",
                type: "input",
                name: "engEmail",
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
                message: "Engineer GitHub username:",
                type: "input",
                name: "engGH",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter a GitHub username")
                    }
                }
            },
            {
                message: 'Choose next employee below:',
                type: 'list',
                name: 'add',
                choices: [
                    "Intern",
                    "Engineer",
                    "I am finished",
                ]
            }])
        .then((r) => {
            outputAns.push(r)
            if (r.add == "Intern") {
                addIntern();
            }
            else if (r.add == "Engineer") {
                addEngineer();
            }
            else {
                console.log("done")
                return outputAns,
                console.log(outputAns)
            }
        })
}


// /*
// 1 - create employee class
// 2 - create engineer, intern, manager, extension classes
// 3 - create tests for each class
// 4 - run tests for each class
// 5 - create cli prompts
// 6 - create html skeleton
// 7 - run cli to make functioning html page
// */




// inquirer.prompt([{
//   type: 'recursive',
//   message: 'Enter intern info',
//   prompts: [
//     {
//         message: "Intern name:",
//         type: "input",
//         name: "intName",
//     },
//     {
//         message: "Intern ID:",
//         type: "input",
//         name: "intId",
//     },
//     {
//         message: "Intern email:",
//         type: "input",
//         name: "intEmail",
//     },
//     {
//         message: "Intern school:",
//         type: "input",
//         name: "intSchool",
//     }]
// }]