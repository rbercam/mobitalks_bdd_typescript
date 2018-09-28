const {BeforeAll, After, AfterAll, Status} = require('cucumber');

import { browser } from 'protractor';
import { config } from '../config/config';

BeforeAll({timeout: 4000 * 40000}, async () =>{
    await browser.get(config.baseUrl);
    await browser.manage().timeouts().implicitlyWait(30000);
})

After(async function (scenario) {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png")
})

AfterAll({timeout: 100 * 1000}, async () =>{
    await browser.quit();
})

