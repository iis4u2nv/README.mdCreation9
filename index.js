// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateREADME = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// inquirer
const promptUser = () => {
  return inquirer.prompt([
  {
     type: "input",
     name: "name",
     message: "What is your name?",
  },
  {
     type: "input",
     name: "location",
     message: "What is your city name?",
  },
  {
    type: "input",
    name: "hobby",
     message: "What is your favorite hobby?",
  },
  {
     type: "list",
    name: "cars",
     message: "What brand of car do you drive",
     choices: ["Dodge", "Ford", "Toyota", "Nissan", "Honda"],
  },
 ])};
 
 ``
//  Created a function to write README file
 const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote an incredible README file'))
    .catch((err) => console.error(err));
};

init();
const fs = () => {
  promptUser()
  .then((answers) => writeFile('userData.txt', (answers)))
  // console.log(answers);
  fs.then(() => console.log('Successfully wrote to user Date Text'))
  .catch((err) => console.error(err));
  };



//  // TODO: Create a function to write README file



// function writeFile(fileName, data) {
//   fs.writeFile(fileName, data, function(err){
//     console.log(err)
//   })
// }

// // // TODO: Create a function to initialize app
// function init() {
//   inquirer
//   .prompt(questions)
//   .then((response) => {
//     writeFile("index.html", JSON.stringify(response))
//   })
// }

// // Function call to initialize app
// init();


//  const generateHTML = ({ name, location, hobby, cars })
//  .then(function(result){
//    fs.writeFile("sample.html", genHTML(result), function(err){
//      console.log(err)
//    })
//  })
