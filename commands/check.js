const ApiService = require("../lib/ApiService");
const KeyManager = require("../lib/KeyManager");

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const apiService = new ApiService(keyManager.getKey());

            const priceOutputData = await apiService.getPriceData(cmd.coin, cmd.cur);

            console.log(priceOutputData);
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = check;