// TODO: Include packages needed for this application - complete
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of the what, why, and how of your project',
    },
    {
        type: 'input',
        name: 'projectTableOfContents',
        message: 'Please provide a table of contents for your project.',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'projectCredits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'list',
        name: 'projectLicense',
        choices: ["GPL", "Apache2.0", "MIT", "None"],
        message: 'Please enter the type of license for your project',
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    return inquirer.prompt(questions).then((responses) => {
        const fileName = `${responses.projectTitle}.md`;
        writeToFile(fileName, generateMarkdown(responses));
        console.log(responses);
    });
}

init();


