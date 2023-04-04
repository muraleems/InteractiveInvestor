import { expect as chaiExpect } from "chai";
import HomePage from "../pageobjects/home.page";
import TradingPage from "../pageobjects/trading.page";
import PensionSIIPChrgPage from "../pageobjects/pensions.siippage";
import elementUtil from "../elementUtil";

describe('Interactive Inverstor function pages', () => {

    it('Check the SIIP Charges link landed into correct url from Pensions Menu', async () => {
        HomePage.open();
        await browser.pause(3000);
        await HomePage.acceptbtnActn();
        await PensionSIIPChrgPage.pensionsParent.click();
        await PensionSIIPChrgPage.siipMenuLnk.click();
        const brwsrUrl = 'https://www.ii.co.uk/ii-accounts/sipp/sipp-charges';
        chaiExpect(await browser.getUrl()).to.contain(brwsrUrl);

    });
    it('Check the SIIP pension page have the defined header', async () => {

        chaiExpect(await (await PensionSIIPChrgPage.siipHeader).getText()).to.be.equal('SIPP charges');

    });

    it('Check the Open a SIIP button link landed into correct url', async () => {
        const openSIIPbtnUrl = '/account-opening/sipp-account';
        HomePage.open();
        await PensionSIIPChrgPage.pensionsParent.click();
        await PensionSIIPChrgPage.siipMenuLnk.click();
        chaiExpect(await PensionSIIPChrgPage.opnSiipBtn.isClickable());
        await PensionSIIPChrgPage.opnSiipBtnActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.includes(openSIIPbtnUrl);

    });
    it('Check the Transfer your button link landed into correct url', async () => {
        const transferUrPensnbtnUrl = 'https://www.ii.co.uk/ii-accounts/sipp/transfer-my-pension'
        HomePage.open();
        await PensionSIIPChrgPage.pensionsParent.click();
        await PensionSIIPChrgPage.siipMenuLnk.click();
        chaiExpect(await PensionSIIPChrgPage.trnfrUrPnsnBtn.isClickable());
        await PensionSIIPChrgPage.trnfrUrPnsnBtnActn();
        chaiExpect(await browser.getUrl()).to.equals(transferUrPensnbtnUrl);


    });
    it('Check the SIIP fees and Charges link landed into correct url from Pensions Menu', async () => {
        const siipFeesandChargesUrl = 'https://www.ii.co.uk/ii-accounts/sipp/sipp-charges'
        HomePage.open();
        await PensionSIIPChrgPage.pensionsParent.click();
        await PensionSIIPChrgPage.siipMenuLnk.click();
        chaiExpect(await PensionSIIPChrgPage.siipfeesnChrgsLnk.isClickable());
        await PensionSIIPChrgPage.siipfeesnChrgsLnkActn();
        chaiExpect(await browser.getUrl()).to.equals(siipFeesandChargesUrl);

    });


});