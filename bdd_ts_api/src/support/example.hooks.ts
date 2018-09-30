const {BeforeAll, After, AfterAll, Status, Before} = require('cucumber');
import fake = require('faker');
import Bank from '../services/example.page';


const stringifyObject = require('stringify-object');

const jsonfile = require('jsonfile');
const file = `${process.cwd()}/tempJSON/data.json`;
let objeto: any;
Before('@CadastroBanco', async () =>{
    Bank.data = {
        name: fake.company.companyName(),
        code: fake.finance.account()
    };

    Bank.dataPut = {
        name: fake.company.companyName(),
        code: fake.finance.account()
    };
    
})

After(async function (scenario) {
    await jsonfile.readFile(file,function(err, obj){
        if(err) console.log(err);
        //console.log(obj)
        objeto = obj;
        
    })
    
    let str:string = await  stringifyObject(objeto,{
        indent: '  ',
        singleQuotes: false
    })

    await this.attach(str);
})
