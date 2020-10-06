const colors = require("colors/safe");

// Class for displaying messages in console with more styles and colors
class ConsoleHandler {
    // Outputs green/success message in the console
    static consoleSuccess(message) {
        let output = colors.green(message);
        console.log(output);
    }

    // Outputs blue/info message in the console
    static consoleInfo(message) {
        let output = colors.blue(message);
        console.log(output);
    }

    // Outputs red/error message in the console
    static consoleError(message) {
        let output = colors.red(message);
        console.log(output);
    }

    // Outputs yellow/warning message in the console
    static consoleWarning(message) {
        let output = colors.yellow(message);
        console.log(output);
    }
}

module.exports = ConsoleHandler;