const fs = require('fs');
const inquirer = require("inquirer")
answers = [];
data = [];
// var licenseChoice

const generatePage = require('./utils/generateMarkdown.js');

// // array of questions for user
// const questions = [
// ];


// function to write README file
function writeToFile(fileName, data) {
    console.log('in the writetoFile' + data.license + ' is the license');
    fs.writeFile("README.md", generatePage(data), (err) => {
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
        // validate: titleInput => {
        //     if (titleInput) {
        //       return true;
        //     } else {
        //       console.log('What is the title of your project?');
        //       return false;
        //     }
        //   }
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
        choices: ['MIT', 'GPL', 'Common', 'GPLv2'],
      },  
      {
        type: 'input',
        name: 'year',
        message: 'What year is it?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your full name?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'link',
        message: 'What is the link to your GitHub repository?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide an explanation of testing performed'
      }]
      )
      .then(function(answers){
          console.log(answers.title + ' is title')
          console.log(answers.description + ' is description')
          console.log(answers.installation + ' is installation')
          console.log(answers.usage + ' is usage')
          console.log(answers.contributing + ' is contributing')
          console.log(answers.tests + ' is tests')
          console.log(answers.link + ' is Github')
          console.log(answers.email + ' is email')
          console.log(answers.license + ' is license')
        //   if(license =='GPL'){
        //       license = 'GPL%20(%3E%3D%202)'
        //   } else
        //       console.log('license is the same');
        //   });
        // console.log(answers.license);
          //   chooseLicense(answers);
        writeToFile('README.md', answers);
        });
    }

// Choose License badge

// function chooseLicense(answers) {
//     if(answers.license=='MIT') {
//         var licenseChoice = url(https://img.shields.io/badge/license-MIT-green)
//     } else if {
//         (answers.license=='GPL>2') {
//             var licenseChoice = url(https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue)
//     //     } else if {
//         (answers.license=='Common') {
//             var licenseChoice = url(https://img.shields.io/badge/license-common-blue)
//     }
//     return(licenseChoice)
// }


// function call to initialize program

init();
