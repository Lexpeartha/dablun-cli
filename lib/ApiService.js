const ConsoleHandler = require("../lib/ConsoleHandler");

const axios = require("axios");

class ApiService {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
	}

	async getPriceData(coinOption, currencyOption) {
		try {
			/* Formatter for currency
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currencyOption
            }); */

			const res = await axios.get(
				`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currencyOption}`
			);

			ConsoleHandler.consoleApiData(res.data, currencyOption);
            
			/*
            let output = "";
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol} (${coin.name}) | Price: ${formatter.format(coin.price)} | Rank: ${coin.rank}\n`;
            }); */
		} catch (err) {
			handleApiError(err);
		}
	}
}

function handleApiError(error) {
	throw new Error(`${error.name}: ${error.message}`);
}

module.exports = ApiService;