
import chai = require('chai');
import Bank from '../services/example.page'
import { TestObject } from 'protractor/built/driverProviders';

chai.use(require('chai-smoothie'))
const {Given, When, Then} = require("cucumber");

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const bank = new Bank();

let body: any;
let statusCode:number;
let message:string;

  Given('realizar uma requisição do tipo {string}', async (tipo) => {
      if (tipo == 'POST'){
        const res = await bank.postBank();
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
      }
  });

  When('a API deverá retornar os dados {string}', async (retorno) => {
        if(retorno == 'do Cadastro'){
          
          console.log(`ID: ${body.id}`);  
          console.log(`Nome: ${body.name}`); 
          console.log(`Codigo: ${body.code}`); 
        }else{
          console.log('Ainda não implementado');
        }
  });


  Then('exibir o código {int}', async (codigo) => {
      if(codigo == 201){
        expect(statusCode).to.eq(codigo);
      }
    
  });


  Then('a mensagem {string}', async (mensagem) => {
    if(mensagem == 'Created'){
       expect(message).to.eq(mensagem)
    }
  });