const ApiService = require("../lib/ApiService");
const KeyManager = require("../lib/KeyManager");
const { consoleError } = require("../lib/ConsoleHandler");

const check = {
	async price(cmd) {
		try {
			const keyManager = new KeyManager();
			const apiService = new ApiService(keyManager.getKey());

			await apiService.getPriceData(cmd.coin, cmd.cur);
		} catch (err) {
			consoleError(err.message);
		}
	}
};

module.exports = check;