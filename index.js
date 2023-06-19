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
     name: "title",
     message: "What is the title of your project?",
  },
  {
     type: "input",
     name: "description",
     message: "How did you install this project?",
  },
  {
    type: "input",
    name: "usage",
     message: "What is the purpose of this project?",
  },
  {
     type: "list",
    name: "licenses",
     message: "What license are you using?",
     choices: ["Apache License 2.0", "Mit License", "Boostoftware License 1.0", "The Unlicense"],
  },
  {
   type: "input",
   name: "contributing",
    message: "Who contributed to this project?",
 },
 {
   type: "input",
   name: "tests",
    message: "What tests did you run?",
 },
 {
   type: "input",
   name: "userName",
    message: "What is your repository name?" 
 },
 {
   type: "input",
   name: "email",
   message:"What is your email?",
 },

 ])};
 
 ``
//  Created a function to write README file
 const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) =>{
      console.log(answers)
     return writeFile('README.md', generateREADME(answers))})
    .then(() => console.log('Successfully wrote an incredible README file'))
    .catch((err) => console.error(err));
};

init();
// const fs = () => {
//   promptUser()
//   .then((answers) => writeFile('userData.txt', (answers)))
//   // console.log(answers);
//   fs.then(() => console.log('Successfully wrote to user Date Text'))
//   .catch((err) => console.error(err));
//   };



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
