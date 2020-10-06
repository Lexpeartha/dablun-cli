const colors = require("colors/safe");

class ConsoleHandler {
    static consoleSuccess(message) {
        let output = colors.green(message);
        console.log(output);
    }

    static consoleInfo(message) {
        let output = colors.blue(message);
        console.log(output);
    }

    static consoleError(message) {
        let output = colors.red(message);
        console.log(output);
    }

    static consoleWarning(message) {
        let output = colors.yellow(message);
        console.log(output);
    }
}

module.exports = ConsoleHandler;