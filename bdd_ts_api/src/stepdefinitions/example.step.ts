
import chai = require('chai');
import Bank from '../services/example.page'
import { TestObject } from 'protractor/built/driverProviders';
import { write } from 'fs';

const jsonfile = require('jsonfile');
const file = `${process.cwd()}/tempJSON/data.json`;
let obj: any;


chai.use(require('chai-smoothie'))
const {Given, When, Then} = require("cucumber");

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const bank = new Bank();

let body: any;
let statusCode:number;
let message:string;
let id: number;

  Given('realizar uma requisição do tipo {string}', async (tipo) => {
      if (tipo == 'POST'){
        const res = await bank.postBank();
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
        id = res.data.id;
      }else if(tipo == 'GET'){
        const res = await bank.getBankById(id);
        body= res.data;
        statusCode = res.status;
        message = res.statusText;
      }else if(tipo == 'PUT'){
        const res = await bank.putBank(id);
        body = res.data;
        statusCode = res.status;
        message = res.statusText;
      }
  });

  When('a API deverá retornar os dados {string}', async (retorno) => {
        if(retorno == 'do Cadastro'){
          expect(body).to.have.property('id')
          expect(body).to.have.property('name')
          expect(body).to.have.property('code')
          console.log('\n');
          console.log(body);
          console.log('\n');
          obj = body;
          jsonfile.writeFile(file,obj,function(error){
            if(error) console.log(error);
          })
        }else if(retorno == 'da Consulta'){
          expect(body).to.have.property('id')
          expect(body).to.have.property('name')
          expect(body).to.have.property('code')
          console.log('\n');  
          console.log(body);
          console.log('\n');
        }else if(retorno == 'da Alteração'){
          expect(body).to.have.property('id')
          expect(body).to.have.property('name')
          expect(body).to.have.property('code')
          console.log('\n');  
          console.log(body);
          console.log('\n'); 
        }else{
          console.log('Ainda não implementado');
        }
  });


  Then('exibir o código {int}', async (codigo) => {
      if(codigo == 201){
        expect(statusCode).to.eq(codigo);
      }else if(codigo == 200){
        expect(statusCode).to.eq(codigo);
      }
    
  });


  Then('a mensagem {string}', async (mensagem) => {
    if(mensagem == 'Created'){
       expect(message).to.eq(mensagem)
    }else if(mensagem == 'OK'){
      expect(message).to.eq(mensagem);
    }
  });
