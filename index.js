const fs = require('fs');
const inquirer = require("inquirer")
answers = [];

// // array of questions for user
// const questions = [
// ];


// function to write README file
function writeToFile(fileName, data) {
    const generatePage = require('./utils/generateMarkdown.js');
    fs.writeFile("README.md", data, (err) => {
            if (err) 
                console.log(err);
          else {
            console.log('README complete! Check out README.md to see the output!');
          }
        });
}



// function to initialize program

function init() {
inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is its usage?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributors to the project'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you choose? (Check one)',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC']
      },
      {
        type: 'input',
        name: 'link',
        message: 'What is the link to your Github repository?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide an explanation of testing performed'
      }]
      )
      .then(function(answers){
          console.log(answers.title + 'title')
          console.log(answers.description + 'description')
          console.log(answers.installation + 'installation')
          console.log(answers.usage + 'usage')
          console.log(answers.contributing + 'contributing')
          console.log(answers.tests + 'tests')
          console.log(answers.link + 'Github')
          console.log(answers.email + 'email')
          console.log(answers.license + 'license')
      })


}



// function call to initialize program

init();
writeToFile();