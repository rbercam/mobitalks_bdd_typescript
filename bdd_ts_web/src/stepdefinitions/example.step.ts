import {browser, protractor, ExpectedConditions} from 'protractor';
import chai = require('chai');
import fake = require('faker');
import { googlePage } from '../pages/example.page';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';
chai.use(require('chai-smoothie'))
const {Given, When, Then, steps} = require("cucumber");
const google: googlePage = new googlePage();
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

  Given('o endereço do Google', async () => {
    await browser.get('http://www.google.com');
  });

  When('realizar a pesquisa por {string}', async (string) => {
       await google.campoPesquisa.sendKeys(string);
       await google.btnPesquisar.click();
  });

  Then('o Google deve exibir o resultado da pesquisa sobre {string}', async (string) => {
    // let texto: string  =  await google.labelTS.getText();
    let texto: string = await browser.getTitle();
    console.log(texto);
    await expect(texto).to.eq(`${string} - Pesquisa Google`);
    await texto.should.be.equal(`${string} - Pesquisa Google`);
    await assert.equal(texto,`${string} - Pesquisa Google`);
  });