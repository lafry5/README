// function to generate markdown for README

function generateMarkdown(data) {

    return `# ${data.title}'s README FILE
==================================

## Repository
You can access this Github Repository at: ${data.link}


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
${data.license}

## *Contributing*
${data.contributing}

## *Tests*
${data.tests}

## *Questions*
For any questions or for support, please contact me at:
${data.email}

  `;
  
  }
  
   module.exports = generateMarkdown;  //required when another file is providing inputs to this function (ref. index.js)