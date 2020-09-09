const program = require("commander");

const checkPrice = require("../commands/check").price;

program
    .command("price")
    .description("Check price of coins")
    .option("--coin <type>", "Add specific coin types in CSV format", "BTC,ETH,XRP")
    .option("--cur <currency>", "Change the currecny", "USD")
    .action(cmd => checkPrice(cmd));

program.parse(process.argv);