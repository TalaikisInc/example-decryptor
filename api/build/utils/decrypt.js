"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const letters_1 = require("./letters");
exports.default = (input, cb) => {
    const out = [];
    input.split(' ').map((val) => {
        let n = parseInt(val);
        let nonSpace = (n > 26 && n % 27 === 0) || n <= 26;
        while (n > 26) {
            n = n / 27;
        }
        out.push(nonSpace && typeof letters_1.default[n] === 'string' ? letters_1.default[n] : ' ');
    });
    cb(out.join(''));
};
//# sourceMappingURL=decrypt.js.map