import CommonUtility from "./common.utility";
import { expect as chaiExpect } from "chai";
class TradingPage {

    //using getter functions to add the selectors
    get openAnAcntbtn() {
        return $('span[title="Open an account"]');
    }
    get transfToUsbtn() {
        return $('span[title="Transfer to us"]');
    }
    get openAnAcntbtnpagetitle() {
        return $('span[title="Open an account"]');
        this.openAnAcntbtn.click();
    }
    get gtStartedbtn1() {

        return $('//a[@href="https://www.ii.co.uk/account-opening/trading-account?planId=PLAN010"]');
    }
    get gtStartedbtn2() {
        return $('//a[@href="https://www.ii.co.uk/account-opening/trading-account?planId=PLAN001"]');
    }
    get bannerTxt1() {
        return $('//div[@class="ii-1mm7ua5"]/p/strong[contains(text(),"The current tax year ends")]');
    }
    get header1() {
        return $('h1=Trading Account');
    }
    get openATradngAct() {
        return $('span[title="Open a Trading Account"]');
    }
    get loginExistngCtmrlnk() {
        return $('span[title="Log in to open a Trading Account"]');
    }
    get fndMoreQckStrtlnk() {
        return $('//a[@href="/quick-start-funds"]//h3[text()="Quick-start Funds"]');
    }
    get fndMoreSpr60lnk() {
        return $('//a[@href="/ii-super-60"]//span[text()="Find out more"]');
    }
    get fndMoreAce40lnk() {
        return $('//a[@href="/ii-ace"]//span[text()="Find out more"]');
    }
    get fndMoreMdlPortlnk() {
        return $('//a[@href="/model-portfolios"]//span[text()="Find out more"]');
    }
    get bnftsoftrdngActlnk() {
        return $('//a[@href="#benefits"]');
    }
    //Page functions for the added selectors/locators
    async fndMoreQckStrtlnkActn() {
        await this.fndMoreQckStrtlnk.click();
    }
    async fndMoreSpr60lnkActn() {
        await this.fndMoreSpr60lnk.click();
    }
    async fndMoreAce40lnkActn() {
        await this.fndMoreAce40lnk.click();
    }
    async fndMoreMdlPortlnkActn() {
        await this.fndMoreMdlPortlnk.click();
    }
    async bnftsoftrdngActlnkActn() {
        await this.bnftsoftrdngActlnk.click();
    }

    async gtStartedbtn1Actn() {
        await this.gtStartedbtn1.click();
    }

    async gtStartedbtn2Actn() {
        await this.gtStartedbtn2.click();
    }
    async bannerTxt1Check(msg) {
        await (await this.bannerTxt1.getText());
        chaiExpect(await (await this.bannerTxt1.getText())).to.be.equal(msg);
    }


}

//exporting the instance of the Homepage class using new keyword
export default new TradingPage();