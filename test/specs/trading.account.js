import { expect as chaiExpect } from "chai";
import HomePage from "../pageobjects/home.page";
import TradingPage from "../pageobjects/trading.page";
import homePage from "../pageobjects/home.page";
import constant from "../constant";
import elementUtil from "../elementUtil";


describe('Interactive Inverstor function pages', () => {

    it('Check the Services link landed into correct url', async () => {
        HomePage.open();
        await browser.maximizeWindow();
        await HomePage.acceptbtnActn();
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(await browser.getUrl()).to.equal(constant.TRADING_ACCOUNT_PAGE_URL);

    });
    it('Check the Trading Account page banner is present', async () => {
        chaiExpect(await (await TradingPage.bannerTxt1.isDisplayed())).to.equal(true);
        chaiExpect(await TradingPage.bannerTxt1Check(constant.TRDNG_PAGE_BANNER_TXT));

    });

    it('Check the Trading Account header text is present', async () => {

        chaiExpect(await (await elementUtil.doGetText(TradingPage.header1))).to.be.equal(constant.TRADING_PAGE_HEADER1);

    });

    it('Check the Get Started button for Invest up to £30,000', async () => {
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.gtStartedbtn1));
        TradingPage.gtStartedbtn1Actn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.GETSTARTED1_URL);

    });

    it('Check the Get Started button for Invest over £30,000', async () => {
        HomePage.open();
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.gtStartedbtn2));
        TradingPage.gtStartedbtn2Actn();
        await browser.pause(3000);
        const currentBrwsr = browser.getUrl();
        chaiExpect(await currentBrwsr).to.equals(constant.GETSTARTED2_URL);

    });

    it('Check the Find out More button for Quick Start is clickable and directed to correct url', async () => {
        HomePage.open();
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.fndMoreQckStrtlnk));
        TradingPage.fndMoreQckStrtlnkActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.FINDMOREQUICKSTART_URL);

    });

    it('Check the Find out More button for Super 60 is clickable and directed to correct url', async () => {
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.fndMoreSpr60lnk));
        TradingPage.fndMoreSpr60lnkActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.FINDMORESUPER60_URL);

    });
    it('Check the Find out More button for ACE 40 is clickable and directed to correct url', async () => {
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.fndMoreAce40lnk));
        TradingPage.fndMoreAce40lnkActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.FINDMOREACE40_URL);

    });
    it('Check the Find out More button for Model Port folios is clickable and directed to correct url', async () => {
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.fndMoreMdlPortlnk));
        TradingPage.fndMoreMdlPortlnkActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.FINDMOREMODELPORTFOLIOS_URL);

    });
    it('Check the Benefits of Trading Account link is clickable and directed to correct url', async () => {
        await elementUtil.doClick(HomePage.servicesDrpdwn);
        await elementUtil.doClick(HomePage.trdngActMenu);
        chaiExpect(true, elementUtil.doIsClickable(TradingPage.bnftsoftrdngActlnk));
        TradingPage.bnftsoftrdngActlnkActn();
        await browser.pause(3000);
        chaiExpect(await browser.getUrl()).to.equals(constant.BENEFITSOFTRADINGACT_URL);

    });



});   