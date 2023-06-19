// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  return `[license info](https://choosealicense.com/licenses/)`
}
function renderDescription(description) {
  return `## Description: ${description}`
}
function renderUsage(usage) {
  return `## Usage: ${usage}`
}
function renderTests(tests) {
  return `## Tests: ${tests}`
}

function renderUserName(userName) {
  return `![GitHub Profile](https://github.com/${userName})`;
}
function renderEmail(email) {
  return `Email ${email}`;
}  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
${renderDescription(data.description)}
${renderUsage(data.usage)}

## licenses
${renderLicenseLink(data.licenses)}
${renderLicenseSection(data.licenses)}
${renderContributing(data.contributing)}
${renderTests(data.tests)}
## Questions
${renderUserName(data.userName)}
${renderEmail(data.email)}
`;
}
function renderContributing(contributing) {
  return `## Contributing: ${contributing}`
}

module.exports = generateMarkdown;

// function genHTML(result) {
//   return `
//   <!DOCTYPE html>
// <html lang="en-US">

//   <head>
//     <meta charset="UTF-8">
//     <title>Welcome to my page!</title>
//   </head>

//   <body>
//     <h1>My first name is ${result.name}</h1>
//     <h1>I'm currently in ${result.location}</h1>
//     <h1>My favority hobby is ${result.hobby}</h1>
//     <h1>I drive a ${result.cars}</h1>
//   </body>

// </html>
//   `
// }

// module.exports = genHTML;
