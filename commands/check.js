const ApiService = require("../lib/ApiService");
const KeyManager = require("../lib/KeyManager");
const { consoleError } = require("../lib/ConsoleHandler");

const check = {
	async price(cmd) {
		try {
			const keyManager = new KeyManager();
			const apiService = new ApiService(keyManager.getKey());

			if(cmd.top != null) {
				await apiService.getTopCoinData(cmd.cur, cmd.top);
			}
			else if(cmd.coin != null) {
				await apiService.getSpecificPriceData(cmd.coin, cmd.cur);
			}
			else {
				await apiService.getGeneralPriceData(cmd.cur);
			}
		} catch (error) {
			consoleError(`${error.name}: ${error.message}`);
		}
	}
};

module.exports = check;