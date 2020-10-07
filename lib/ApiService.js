const ConsoleHandler = require("../lib/ConsoleHandler");

const axios = require("axios");

class ApiService {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
	}

	async getTopCoinData(currencyOption, listingAmount) {
		try {
			const res = await axios.get(
				`${this.baseUrl}?key=${this.apiKey}&convert=${currencyOption}&per-page=${listingAmount}&page=1`
			);

			ConsoleHandler.consoleApiData(res.data, currencyOption);

		} catch (error) {
			ConsoleHandler.consoleError(`${error.name}: ${error.message}`)
		}
	}

	async getSpecificPriceData(coinOption, currencyOption) {
		try {
			const res = await axios.get(
				`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currencyOption}`
			);

			ConsoleHandler.consoleApiData(res.data, currencyOption);

		} catch (err) {
			handleApiError(err);
		}
	}

	async getGeneralPriceData(currencyOption) {
		try {
			const res = await axios.get(
				`${this.baseUrl}?key=${this.apiKey}&convert=${currencyOption}&per-page=20&page=1`
			);

			ConsoleHandler.consoleApiData(res.data, currencyOption);

		} catch (err) {
			handleApiError(err);
		}
	}
}

function handleApiError(error) {
	throw new Error(`${error.name}: ${error.message}`);
}

module.exports = ApiService;