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
const protractor_1 = require("protractor");
const chai = require("chai");
const example_page_1 = require("../pages/example.page");
chai.use(require('chai-smoothie'));
const { Given, When, Then, steps } = require("cucumber");
const google = new example_page_1.googlePage();
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
Given('o endereço do Google', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://www.google.com');
}));
When('realizar a pesquisa por {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield google.campoPesquisa.sendKeys(string);
    yield google.campoPesquisa.submit();
    //await google.btnPesquisar.click();
}));
Then('o Google deve exibir o resultado da pesquisa sobre {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // let texto: string  =  await google.labelTS.getText();
    let texto = yield protractor_1.browser.getTitle();
    console.log(texto);
    yield expect(texto).to.eq(`${string} - Pesquisa Google`);
    yield texto.should.be.equal(`${string} - Pesquisa Google`);
    yield assert.equal(texto, `${string} - Pesquisa Google`);
}));
