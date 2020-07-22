// function to generate markdown for README

function generateMarkdown(data) {

    return `# ${data.title} README

Github Repository: ${data.Github}

# Description
${data.description}

# Table of Contents
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
For any questions or for support, please contact me at:
${data.email}

  `;
  
  }
  
   module.exports = generateMarkdown;  //required when another file is providing inputs to this function (ref. index.js)