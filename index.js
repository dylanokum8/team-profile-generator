const fs = require('fs');
const inquirer = require('inquirer');

const generateHtml = require('./src/generateHtml');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const employees = [];

// beginning of the manager prompts
const addManager = [{
    
        type: 'input',
        name: 'name',
        message: 'Enter the name of the manager (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log('Please enter the name of the manager');
                return false;
            }
        },

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the managers employee ID (Required)',
        validate: idInput => {
            if(idInput) {
                return true;
            }
            else {
                console.log('Please enter the managers employee id');
                return false;
            }
        },

    },
    {
       type: 'input',
       name: 'email',
       message: 'Enter the managers email (Required)',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if(valid) {
                return true;
            }
            else {
                console.log('Please enter a valid email address');
                return false;
            }
        },
    
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the managers office number (Required)',
        validate: officeInput => {
            if(officeInput) {
                return true;
            }
            else {
                console.log('Please enter the managers office number');
                return false;
            }
        },
    },
   

    ]


const tmQuestions = [
{
    type: 'confirm',
    name: 'addTm',
    message: 'Would you like to add an Engineer or Intern to the team?',
    default: true
},
{
   type: 'checkbox',
   name: 'tmType',
   message: 'Please confirm wether the new team member is an Engineer or Intern',
   choices: ['Engineer', 'Intern'],
   when: ({ addTm }) => addTm
}
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the interns name',
        validate: internName => {
            if (internName) {
                return true;
            }
            else {
                console.log('Please enter the name of the intern');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Enter the interns ID',
        validate: internId => {
            if(internId) {
                return true;
            }
            else {
                console.log('Please enter the ID of the intern');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the interns email address',
        validate: internEmail => {
            if(internEmail) {
                return true;
            }
            else {
                console.log('Please enter the interns email address');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter the name of the interns school',
        validate: internSchool => {
            if(internSchool) {
                return true;
            }
            else {
                console.log('Please enter the school the intern attended');
                return false;
            }
        },
    }
]