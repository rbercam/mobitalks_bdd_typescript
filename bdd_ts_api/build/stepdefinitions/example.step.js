"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const example_page_1 = require("../services/example.page");
chai.use(require('chai-smoothie'));
const { Given, When, Then } = require("cucumber");
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const bank = new example_page_1.default();
let body;
let statusCode;
let message;
Given('realizar uma requisição do tipo {string}', (tipo) => __awaiter(this, void 0, void 0, function* () {
    if (tipo == 'POST') {
        const res = yield bank.postBank();
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
    }
}));
When('a API deverá retornar os dados {string}', (retorno) => __awaiter(this, void 0, void 0, function* () {
    if (retorno == 'do Cadastro') {
        console.log(`ID: ${body.id}`);
        console.log(`Nome: ${body.name}`);
        console.log(`Codigo: ${body.code}`);
    }
    else {
        console.log('Ainda não implementado');
    }
}));
Then('exibir o código {int}', (codigo) => __awaiter(this, void 0, void 0, function* () {
    if (codigo == 201) {
        expect(statusCode).to.eq(codigo);
    }
}));
Then('a mensagem {string}', (mensagem) => __awaiter(this, void 0, void 0, function* () {
    if (mensagem == 'Created') {
        expect(message).to.eq(mensagem);
    }
}));
