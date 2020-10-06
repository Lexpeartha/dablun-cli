const KeyManager = require("../lib/KeyManager");
const InputHandler = require("../lib/InputHandler");
const { consoleSuccess, consoleInfo, consoleError } = require("../lib/ConsoleHandler");
const isRequired = require("../utils/validation").isRequired;

const key = {
    async set() {
        const keyManager = new KeyManager();

        InputHandler.promptInput([
            {
                name: "key",
                message: "Enter API key",
                validate: isRequired
            }
        ]).then(answer => {
            keyManager.setKey(answer.key);
        }).catch(error => {
            consoleError(error.message);
        });

        const key = keyManager.key;

        if (key) {
            consoleSuccess("API key set successfully!")
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            consoleInfo("Current API key is: " + key);

            return key;
        } catch (err) {
            console.error(err.message);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.removeKey();

            consoleInfo("API key has been removed!");
        } catch (err) {
            consoleError(err.message);
        }
    }
};

module.exports = key;