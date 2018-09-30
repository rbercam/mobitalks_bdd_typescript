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
let id;
Given('realizar uma requisição do tipo {string}', (tipo) => __awaiter(this, void 0, void 0, function* () {
    if (tipo == 'POST') {
        const res = yield bank.postBank();
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
        id = res.data.id;
    }
    else if (tipo == 'GET') {
        const res = yield bank.getBankById(id);
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
    }
    else if (tipo == 'PUT') {
        const res = yield bank.putBank(id);
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
    }
}));
When('a API deverá retornar os dados {string}', (retorno) => __awaiter(this, void 0, void 0, function* () {
    if (retorno == 'do Cadastro') {
        expect(body).to.have.property('id');
        expect(body).to.have.property('name');
        expect(body).to.have.property('code');
        console.log('\n');
        console.log(body);
        console.log('\n');
    }
    else if (retorno == 'da Consulta') {
        expect(body).to.have.property('id');
        expect(body).to.have.property('name');
        expect(body).to.have.property('code');
        console.log('\n');
        console.log(body);
        console.log('\n');
    }
    else if (retorno == 'da Alteração') {
        expect(body).to.have.property('id');
        expect(body).to.have.property('name');
        expect(body).to.have.property('code');
        console.log('\n');
        console.log(body);
        console.log('\n');
    }
    else {
        console.log('Ainda não implementado');
    }
}));
Then('exibir o código {int}', (codigo) => __awaiter(this, void 0, void 0, function* () {
    if (codigo == 201) {
        expect(statusCode).to.eq(codigo);
    }
    else if (codigo == 200) {
        expect(statusCode).to.eq(codigo);
    }
}));
Then('a mensagem {string}', (mensagem) => __awaiter(this, void 0, void 0, function* () {
    if (mensagem == 'Created') {
        expect(message).to.eq(mensagem);
    }
    else if (mensagem == 'OK') {
        expect(message).to.eq(mensagem);
    }
}));
