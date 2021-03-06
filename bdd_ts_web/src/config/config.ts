import { Config, browser } from 'protractor';


export const config: Config ={
    seleniumAddress: "http://127.0.0.1:6666/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://www.google.com',

    capabilities: {
        browserName: 'chrome',
    },
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs:[
        `${process.cwd()}/features/*.feature`,
    ],
    onPrepare: () => {
        browser.ignoreSynchronization =true;
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json: ../../reports/jsonCucucmber/cucumber_report.json",
        require: ["../../build/stepdefinitions/*.js", "../../build/support/*.js"],
        strict: true
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            jsonOutputPath: `${process.cwd()}/reports/json`,
            //jsonDir: `${process.cwd()}/reports`,
            reportPath: `${process.cwd()}/reports/html`,
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            pageFooter: "TypeScript Automation Tests",
            metadataKey: "capabilities",
            customData: {
                title: 'Sobre o Projeto',
                data: [
                    {label: 'Projeto', value: 'Automação em TypeScript'},
                    {label: 'FrameWork' , value: 'protractor-cucumber-framework'},
                    {label: 'QA' , value: 'Rafael Berçam'},
                ]
            },
            displayDuration: true,
            durationInMS: false,
            openReportInBrowser: true,
            pageTitle: "Relatório BDD",
            reportName: "Relatório Automação de Testes (BDD)",
            customMetadata: false,
        }
    }],
    onComplete: () => {
    }
}