"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
axios_1.default.defaults.baseURL = 'http://localhost:3000';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
class Bank {
    postBank() {
        return axios_1.default.post('/bank', Bank.data);
    }
    getBank() {
        return axios_1.default.get('/bank');
    }
    getBankById(id) {
        return axios_1.default.get(`/bank/${id}`);
    }
    putBank(id) {
        return axios_1.default.put(`/bank/${id}`, Bank.dataPut);
    }
    deleteBank(id) {
        return axios_1.default.delete(`/bank/${id}`);
    }
}
Bank.data = null;
Bank.dataPut = null;
exports.default = Bank;
