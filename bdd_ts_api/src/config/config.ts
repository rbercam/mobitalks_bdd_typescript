import { Config } from 'protractor';
import {Reporter} from '../support/reporter'
const jsonReports = process.cwd() + "/reportAPI  ";

export const config: Config ={
   
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs:[
        `${process.cwd()}/features/*.feature`,
    ],
    
   
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json: ../../reportAPI/json/cucumber_report.json",
        require: ["../../build/stepdefinitions/*.js", "../../build/support/*.js"],
        strict: true
    },
    onPrepare: () => {
        Reporter.createDirectory(jsonReports);
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
        Reporter.createHTMLReport();
    }
}