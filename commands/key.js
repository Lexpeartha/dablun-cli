const inquirer = require("inquirer");

const KeyManager = require("../lib/KeyManager");
const isRequired = require("../utils/validation").isRequired;

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter API key",
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);

        if (key) {
            console.log("API key set");
        }
    },
    async setValueManually(keyValue) {
        try {
            const keyManager = new KeyManager();
            const keyValue = keyManager.getKey(keyValue);

            return keyValue;
        } catch (err) {
            console.error(err.message);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log("Current API key is: " + key);

            return key;
        } catch (err) {
            console.error(err.message);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.removeKey();

            console.log("API key has been removed!");
        } catch (err) {
            console.error(err.message);
        }
    }
};

module.exports = key;