// function to generate markdown for README

function generateMarkdown(data) {

    return `# ${data.title}'s README FILE
==================================

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