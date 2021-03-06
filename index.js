//Import the employees
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Import the inquirer module
const inquirer = require("inquirer");
//Import the file system module
const fs = require("fs");
//Import the jest module to run the test
const jest = require("jest");

const generateHTML = require("./src/generateHTML");

//Create a team members array
const teamMembers = [];
//Create an ID array which will be used to avoid duplicate IDs
const idArray = [];


//Run createManager functions
function createManager() {
    //Prompt to answer the questions about the manager
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        default: "Panda",
        //validate the input to make sure it's not empty
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
        default: "123",
        validate: answer => {
            //Check if the id is valid
            //match() method retrieves the result of matching a string against a regular expression
            const valid = answer.match(
            //regular expression for checking if the input is a valid number
            /^0|[1-9]\d*$/
            );
            if (valid) {
              return true;
            }
            return "Please enter a positive number.";
          }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        default: "kungfu@panda.com",
        validate: answer => {
            //match() method retrieves the result of matching a string against a regular expression
            const valid = answer.match(
                //Check if the email input contains important elements such as @, dot(.)
              /\S+@\S+\.\S+/
            );
            if (valid) {
              return true;
            }
            return "Please enter a valid email address.";
          }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
        default: "100",
        validate: answer => {
            //Check if the id is valid
            //match() method retrieves the result of matching a string against a regular expression
            const valid = answer.match(
            //regular expression for checking if the input is a valid number
            /^0|[1-9]\d*$/
            );
            if (valid) {
              return true;
            }
            return "Please enter a positive number.";
          }
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      //Push the manger to team members array
      teamMembers.push(manager);
      console.log(manager);
      console.log('Manager character is created successfully.');
      //Push the manager's ID to id array
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
        //Prompt to choose a type of team member to add
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
            //write to team.html by default 
            writeToFile("./dist/team.html", generateHTML(teamMembers));
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
        default: "Peter",
        //validate the input to make sure it's not empty
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
        default: "234",
        validate: answer => {
             //Check if the ID is valid
          const valid = answer.match(
            //regular expression for checking if the input is a valid number
            /^0|[1-9]\d*$/
          );
          if (valid) {
              //Check if the ID has been taken
            if (idArray.includes(answer)) {
                //Prompt the user to choose new id if the ID array already has the same ID
              return "This ID is already taken. Please enter a different ID.";
            } else {
              return true;
            }

          }
          //Prompt the user to enter a positive number
          return "Please enter a positive number.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
        default: "peter@panda.com",
        validate: answer => {
            //match() method retrieves the result of matching a string against a regular expression
            const valid = answer.match(
                //Check if the email input contains important elements such as @, dot(.)
              /\S+@\S+\.\S+/
            );
            if (valid) {
              return true;
            }
            return "Please enter a valid email address.";
          }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
        default: "magickw",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      //Push the manger to team members array
      teamMembers.push(engineer);
      console.log(engineer);
      console.log('Engineer character is created successfully.');
      //Push the engineer's ID to id array
      idArray.push(answers.engineerId);
      //Once the engineer role is created, then run the createTeam function
      createTeam();
    });
  }

//Run addIntern() function when the user chooses Intern
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        default: "Sarah",
        validate: answer => {
            //validate the input to make sure it's not empty
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
        default: "456",
        validate: answer => {
            //Check if the ID is valid
            //match() method retrieves the result of matching a string against a regular expression
          const valid = answer.match(
            //regular expression for checking if the input is a valid number
            /^0|[1-9]\d*$/
          );
          if (valid) {
               //Check if the id has been taken
            if (idArray.includes(answer)) {
              return "This ID is already taken. Please enter a different ID.";
            } else {
              return true;
            }

          }
          return "Please enter a positive number.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
        default: "sarah@panda.com",
        validate: answer => {
            //match() method retrieves the result of matching a string against a regular expression
          const valid = answer.match(
              //Check if the email input contains important elements such as @, dot(.)
            /\S+@\S+\.\S+/
          );
          if (valid) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        default: "Stanford",
        validate: answer => {
            //Check if the input is empty
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      //Push the intern to team members array
      teamMembers.push(intern);
      console.log(intern);
      console.log('Intern character is created successfully.');
      //Push the intern's ID to id array
      idArray.push(answers.internId);
      //Once the intern role is created, then run the createTeam function
      createTeam();
    });
  }

//Run writeToFile function to generate the team roster
  function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('Team.html is created successfully.');
    });
}

  createManager();
