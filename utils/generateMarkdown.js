// function to generate markdown for README

function generateMarkdown(data) {

    return `# ${data.title}'s README FILE
==================================

if(${data.license}=='MIT') {
    [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
}

if(${data.license}=='GPLv3') {
    [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
}

if(${data.license}=='GPL') {
    [![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
}

if(${data.license}=='CC-0') {
    [![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
}

## Repository
You can access this Github Repository at: ${data.link}

## Video Link
The link to the video of this project is located at: 


## *Description*
${data.description}

# Table of Contents
* [Description](#description)
+ [Table of Contents](#table-of-contents)
- [Installation](#installation)
* [Usage](#usage)
+ [License](#license)
- [Contributing](#contributing)
* [Tests](#tests)
+ [Questions](#questions)

## *Installation*
${data.installation}

## *Usage*
${data.usage}

## *License*
This application is covered under the ${data.license} license. Copyright (c) ${data.year} ${data.name}

## *Contributing*
${data.contributing}

## *Tests*
${data.tests}

## *Questions*
For any questions or for support, please contact me at: ${data.email} or ${data.username} on GitHub.


  `;
  
  }
  
   module.exports = generateMarkdown;  //required when another file is providing inputs to this function (ref. index.js)