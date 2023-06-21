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
     choices: ["apache 2.0", "MIT", "bsl 1.0", "unlicense"],
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
    message: "What is your user name?" 
 },
 
 {
   type: "input",
   name: "email",
   message:"What is your email?",
   validate: (x) => {
      const validator = x.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
      if(validator) {
         return true;
      } 
      return 'Please choose a valid email'
   }
 },

 ])};
 
 //  Created a function to write README file
 const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) =>{
      console.log(answers)
     return writeFile('README_sample.md', generateREADME(answers))})
    .then(() => console.log('Successfully wrote an incredible README file'))
    .catch((err) => console.error(err));
};

init();

