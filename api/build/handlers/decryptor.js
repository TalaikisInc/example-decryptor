"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decrypt_1 = require("../utils/decrypt");
exports.default = (req, res) => {
    const inputMessage = typeof req.body.message === 'string' ? req.body.message : false;
    if (inputMessage) {
        decrypt_1.default(inputMessage, (message) => {
            if (message) {
                res.json({ message });
            }
            else {
                res.json({ error: 'Something wrong.' });
            }
        });
    }
    else {
        res.json({ error: 'No message received.' });
    }
};
//# sourceMappingURL=decryptor.js.map