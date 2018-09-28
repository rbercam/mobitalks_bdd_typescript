"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
axios_1.default.defaults.baseURL = 'http://localhost:3000';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
class Bank {
    postBank() {
        return axios_1.default.post('/bank', Bank.data);
    }
}
Bank.data = null;
exports.default = Bank;
