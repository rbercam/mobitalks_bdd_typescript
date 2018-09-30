const {BeforeAll, After, AfterAll, Status, Before} = require('cucumber');
import fake = require('faker');
import Bank from '../services/example.page';


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


