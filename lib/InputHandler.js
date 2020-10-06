const inquirer = require("inquirer");

// Class for wrapping inquirer to give even more ease when working with user input
class InputHandler {

    // Returns a promise with answers object that are of the type `input`
    static async promptInput(questions) {
        let properlyTypedQuestions = setType(questions, "input");
        return await inquirer.prompt(properlyTypedQuestions);
    }

    // Returns a promise with answers object that are of the type `number`
    static async promptNumber(questions) {
        let properlyTypedQuestions = setType(questions, "number");
        return await inquirer.prompt(properlyTypedQuestions);
    }

    // Returns a promise with answers object that are of the type `confirm`
    static async promptConfirm(questions) {
        let properlyTypedQuestions = setType(questions, "confirm");
        return await inquirer.prompt(properlyTypedQuestions);
    }
}

// Sets each element in passed array to needed type
let setType = (questions, type) => {
    questions.forEach(question => {
        question.type = type;
    });
    return questions; // setType is not a function
}

module.exports = InputHandler;