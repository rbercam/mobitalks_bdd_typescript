"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
//import * as reporter from "multiple-cucumber-html-reporter"
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const jsonReports = path.join(process.cwd(), "/reportAPI/json");
const htmlReports = path.join(process.cwd(), "/reportAPI/html");
const targetJson = jsonReports + "/cucumber_report.json";
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Manjaro 15",
        "Parallel": "Scenarios",
        "Executed": "LocalSS"
    },
    name: "Relatório BDD API",
    brandTitle: "BDD API TypeScript",
    launchReport: true
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
exports.Reporter = Reporter;
