// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return `\n* [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `## license

This project is lincese under the ${license} license`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenseName)}
## Description
${data.projectDescription}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.licenseName)}
* [ProjectTitle](#projectTitle)
* [LicenseName](#licenseName)
* [Table of Contents](#Table of Contents)
* [ProjectDescription](#projectDescription)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
* [Contacts](#contacts)
* [Github](#github)
* [Email](#email)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.licenseName)}
    
## Contributing
${data.contributors}
## Tests
${data.tests}
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
## Questions
${data.questions}
## Contacts
${data.contacts}
##EMAIL: ${data.email}
##Github:[${data.github}](https://github.com/${data.github}/)`;
}

module.exports = generateMarkdown;