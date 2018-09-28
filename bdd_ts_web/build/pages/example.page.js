"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class googlePage {
    constructor() {
        this.campoPesquisa = protractor_1.element(protractor_1.by.id('lst-ib'));
        this.btnPesquisar = protractor_1.element(protractor_1.by.name('btnK'));
        this.labelTS = protractor_1.element(protractor_1.by.css('#rhs_block > div > div.kp-blk.knowledge-panel.Wnoohf.OJXvsb > div > div.ifM9O > div:nth-child(2) > div.kp-header > div > div.kp-hc > div > div > div.SPZz6b.gsrt > div.kno-ecr-pt.kno-fb-ctx > span'));
    }
}
exports.googlePage = googlePage;
