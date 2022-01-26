//Import the employees
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Import the inquirer module
const inquirer = require("inquirer");
//Import the file system module
const fs = require("fs");

//Create a team member array
const teamMembers = [];
const idArray = [];


//Run createManager functions
function createManager() {
    //Prompt to answer the questions about the manager
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      //Once the manager role is created, then run the createTeam function
      createTeam();
    });
  }

  //Run createTeam() function
  function createTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        //Prompt to add the type of team member
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
          //Run the corresponding function according to the user's choice
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

//Run addEngineer() function when the user chooses Engineer
  function addEngineer() {
      //Prompt to answer the questions about the manager
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
              //Check if the id has been taken
            if (idArray.includes(answer)) {
                //Prompt the user to choose new id if the id has been taken
              return "This ID is already taken. Please enter a different ID.";
            } else {
              return true;
            }

          }
          //Prompt the user to enter a positive number
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
  }

  