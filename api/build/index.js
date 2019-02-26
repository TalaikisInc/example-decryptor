"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const decryptor_1 = require("./handlers/decryptor");
const app = express();
const port = 3001;
app.use(bodyParser.json());
app.post('/api', (req, res) => {
    decryptor_1.default(req, res);
});
const server = app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`==> listening on http://localhost:${port}.`);
});
function stop() {
    server.close();
}
module.exports = server;
module.exports.stop = stop;
//# sourceMappingURL=index.js.map