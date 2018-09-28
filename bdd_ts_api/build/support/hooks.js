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
const { BeforeAll, After, AfterAll, Status, Before } = require('cucumber');
const fake = require("faker");
const example_page_1 = require("../services/example.page");
Before('@CadastroBanco', () => __awaiter(this, void 0, void 0, function* () {
    example_page_1.default.data = {
        name: fake.company.companyName(),
        code: fake.finance.account()
    };
}));
