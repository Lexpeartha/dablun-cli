const safeColors = require("colors/safe");

const separator = "|";

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
	static consoleApiData(data, currencyOption) {

		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currencyOption
		});

		const output = data.map(coin => {
			// These variables need to be extracted, so we can "pollute" string prototype with colors
			let coinSymbol = coin.symbol;
			let coinName = coin.name;
			let coinRank = safeColors.cyan(coin.rank);

			// Storing formatted price and making it more accessable to 'safeColors' package
			// NOT NEEDED: let coinPrice = coin.price;
			let formattedPrice = safeColors.green(
				formatter.format(coin.price)
				.toString()
			);
			
			// Fomratting the output
			let tempTitleColored = safeColors.magenta(`${coinName}(${coinSymbol})`) + ": ";
			let title = safeColors.underline(tempTitleColored);
			let content = safeColors.italic(
				`\nRank: ${coinRank}\nPrice: ${formattedPrice}\n`
			);

			return title + content;
		}).join("");

		console.log(output);
	}
}

module.exports = ConsoleHandler;