const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generatingMarkdown");

const prompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Project-Tittle?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: " Project-Table of content?",
            name: "Table of Contents"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?.",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "usage"
        },
        {
            type: "input",
            message: "please enter github user name of the contributor?.",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        },
        {
            type: "input",
            message: "If you have question?.",
            name: "questions"
        },
        {
            type: "input",
            message: "If you have any question,please contact me?.",
            name: "contacts"
        },
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "github"
        },
        {
            type: "input",
            message: "Provide emailAddress",
            name: "email"
        },
    ])
};

const init = () => {
    prompt()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('readMe.md', generateMarkdown(answers)))
        .then(() => console.log('readme.md created!'))
        .catch((err) => console.error(err));
};
init();