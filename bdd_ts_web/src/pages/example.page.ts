import { ElementFinder, element, by } from 'protractor';

export class googlePage {
    public campoPesquisa: ElementFinder;
    public btnPesquisar: ElementFinder;
    public labelTS: ElementFinder;

    constructor(){
        this.campoPesquisa = element(by.id('lst-ib'))
        this.btnPesquisar = element(by.name('btnK'))
        this.labelTS = element(by.css('#rhs_block > div > div.kp-blk.knowledge-panel.Wnoohf.OJXvsb > div > div.ifM9O > div:nth-child(2) > div.kp-header > div > div.kp-hc > div > div > div.SPZz6b.gsrt > div.kno-ecr-pt.kno-fb-ctx > span'))
    }
}

