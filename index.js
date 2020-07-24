const fs = require('fs');
const inquirer = require("inquirer")
answers = [];
data = [];
// licensechoice = [];

const generatePage = require('./utils/generateMarkdown.js');

// // array of questions for user
// const questions = [
// ];


// function to write README file
function writeToFile(fileName, data) {
    console.log(data.title);
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
        choices: ['MIT', 'GPLv3', 'GPL', 'CC-0'],
        // var licensechoice[] = choices[];
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
          console.log(answers.title + 'title')
          console.log(answers.description + 'description')
          console.log(answers.installation + 'installation')
          console.log(answers.usage + 'usage')
          console.log(answers.contributing + 'contributing')
          console.log(answers.tests + 'tests')
          console.log(answers.link + 'Github')
          console.log(answers.email + 'email')
          console.log(answers.license + 'license')
        //   chooseLicense(answers);
          writeToFile('README.md', answers);
        })
        

}


// Choose License badge

// function chooseLicense(answers) {
//     if(answers.license=='MIT') {
//         licensechoice = [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
//     } else if {
//         (answers.license=='GPLv3') {
//             licensechoice =  [GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)    
//     } else if {
//         (answers.license=='GPL') {
//             licensechoice =  [GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
//     } else if {
//         (answers.license=='CC-0') {
//             licensechoice =  [CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
//     }
//     return(licensechoice)
// }


// function call to initialize program

init();
