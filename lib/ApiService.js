const axios = require("axios");

class ApiService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
    }

    async getPriceData(coinOption, currencyOption) {
        try {
            // Formatter for currency
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currencyOption
            });

            const res = await axios.get(
                `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currencyOption}`
            );

            let output = "";
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol} (${coin.name}) | Price: ${formatter.format(coin.price)} | Rank: ${coin.rank}\n`;
            });

            return output;
        } catch (err) {
           handleApiError(err);
        }
    }
}

function handleApiError(error) {
    if(error.response.status === 401)  {
        throw new Error("Invalid API key");
    } else if(error.response.status === 404) {
        throw new Error("API is not responding");
    } else {
        throw new Error("Something is not working:" + error.message);
    }
}

module.exports = ApiService;