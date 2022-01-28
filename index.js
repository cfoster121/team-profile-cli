var fs = require('fs');
var inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require("./lib/manager");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const { Console } = require('console');


var htmlHead =
    `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Team Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="">
<script src="https://cdn.tailwindcss.com"></script>

</head>
<body class=bg-sky-100>

<!--header-->
<header class="bg-blue-500">
<h1 class="text-5xl text-center py-20">Meet Our Team</h1>
</header>

<!--Grid layout-->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20 pt-5">`

var htmlEnd =
    `</section>
</body>
</html>`

var htmlCards = ''

var outputAns = []

console.log("\n***\n Welcome to Team Profile generator! \nType your response to each prompt and press enter to submit. \n***\n")

var managerInf =
    inquirer
        .prompt([
            {
                message: 'Manager name:',
                type: 'input',
                name: 'manName',
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
                name: 'manId',
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
                name: 'manEmail',
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
                name: 'manOffice',
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
            // else {
            //     console.log("done")
            //     return outputAns,
            //         console.log(outputAns),
            //         fs.appendFile("index2.html", html, function (err) {
            //             if (err) throw err;
            //             console.log('Saved');
            //         })

            else {
                var newMg = new Manager(r.manName, r.manId, r.manEmail, r.manOffice);

                let mgName = newMg.getName();
                let mgID = newMg.getId();
                let mgEmail = newMg.getEmail();
                let mgOffice = newMg.getOffice();
                let role = newMg.getRole();

                var card =
                    `<!--Card-->
                <article class="container bg-blue-100 rounded-md">
                <div class="bg-blue-900">
                <h1>${mgName}</h1>
                <h2>${mgID}</h2>
                </div>
                <div>${role}</div>
                <div>${mgEmail}</div>
                <div>${mgOffice}</div>
                </article>`;
                htmlCards += card

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
                var newInt = new Intern(r.intName, r.intId, r.intEmail, r.intSchool);

                let intName = newInt.getName();
                let intID = newInt.getId();
                let intEmail = newInt.getEmail();
                let intSchool = newInt.getSchool();
                let role = newInt.getRole();

                var card =
                    `<!--Card-->
                <article class="container bg-blue-100 rounded-md">
                <div class="bg-blue-900">
                <h1>${intName}</h1>
                <h2>${intID}</h2>
                </div>
                <div>${role}</div>
                <div>${intEmail}</div>
                <div>${intSchool}</div>
                </article>`;
                htmlCards += card

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
  
                var newEng = new Engineer(r.engName, r.engId, r.engEmail, r.engGH);

                let engName = newEng.getName();
                let engID = newEng.getId();
                let engEmail = newEng.getEmail();
                let engGH = newEng.getGh();
                let role = newEng.getRole();

                var card =
                    `<!--Card-->
                <article class="container bg-blue-100 rounded-md">
                <div class="bg-blue-900">
                <h1>${engName}</h1>
                <h2>${engID}</h2>
                </div>
                <div>${role}</div>
                <div>${engEmail}</div>
                <div>${engGH}</div>
                </article>`;
                htmlCards += card

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




