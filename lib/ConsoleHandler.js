const safeColors = require("colors/safe");
const colors = require("colors");

// Class for displaying messages in console with more styles and colors
class ConsoleHandler {
    // Outputs green/success message in the console
    static consoleSuccess(message) {
        let output = safeColors.green(message);
        console.log(output);
    }

    // Outputs blue/info message in the console
    static consoleInfo(message) {
        let output = safeColors.blue(message);
        console.log(output);
    }

    // Outputs red/error message in the console
    static consoleError(message) {
        let output = safeColors.red(message);
        console.log(output);
    }

    // Outputs yellow/warning message in the console
    static consoleWarning(message) {
        let output = safeColors.yellow(message);
        console.log(output);
    }

    // Outputs the API request data about crypto-currencies in nice and visible way
    static consoleApiData(data) {

        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currencyOption
        });

        const separator = " | ";

        let output = "";

        data.forEach(coin => {
            const lineOutput = output
                .concat(`Coin: ${coin.symbol} ${coin.name}`.underline.bgWhite.blue)
                .concat(separator)
                .concat(`Price: ${formatter.format(coin.price)}`.underline.bgWhite.green)
                .concat(separator)
                .concat(`Rank: ${coin.rank}`.underline.bgWhite.yellow)
                .concat("\n");
            output += lineOutput;
        });

        console.log(output);
    }
}

module.exports = ConsoleHandler;