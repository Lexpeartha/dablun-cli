const program = require("commander");

const checkPrice = require("../commands/check").price;

program
	.command("price")
	.description("Check price of coins")
	.option("--coin <type>", "Add specific coin types in CSV format", null)
	.option("--cur <currency>", "Change the currecny", "USD")
	.option("--top <listingNumber>",
	"Show specific amount of cryptocurrencies that are in trend", null)
	.action(cmd => checkPrice(cmd));

program.parse(process.argv);