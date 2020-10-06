const ApiService = require("../lib/ApiService");
const KeyManager = require("../lib/KeyManager");
const { consoleError, consoleInfo } = require("../lib/ConsoleHandler");

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const apiService = new ApiService(keyManager.getKey());

            const priceOutputData = await apiService.getPriceData(cmd.coin, cmd.cur);

            consoleInfo(priceOutputData);
        } catch (err) {
            consoleError(err.message);
        }
    }
}

module.exports = check;