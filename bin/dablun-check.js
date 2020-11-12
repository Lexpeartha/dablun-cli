const program = require("commander");

const checkPrice = require("../commands/check").price;

program
	.command("price")
	.description("Check price of coins")
	.option("--coin <type>", "Add specific coin types in CSV format", null)
	.option("--cur <currency>", "Change the currency", "USD")
	.option("--top <listingNumber>",
	"Show specific amount of cryptocurrencies that are in trend", null)
	// TO DO: Implement feature below
	//.option("--status <statusActivity>", "Specify whether you want some active or inactive currencies to be shown, all options are: active, inactive and dead", "active")
	.action(cmd => checkPrice(cmd));

program.parse(process.argv);