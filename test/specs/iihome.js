import { expect as chaiExpect } from "chai";
import HomePage from "../pageobjects/home.page";
import TradingPage from "../pageobjects/trading.page";
import constant from "../constant";

describe('Interactive Inverstor function pages', () => {
  before(async () => {
    HomePage.open();
    await HomePage.acceptbtnActn();
  });

  // Verify the title of the main page loaded
  it('Should have the right title while in the main page', async () => {
    console.log('Title of the page :', await HomePage.getPageTitle());
    chaiExpect(await HomePage.getPageTitle()).to.equal(constant.HOMEPAGE_TITLE);

  });

  it('Checking the main Nav menus are clickable', async () => {
    //Asserting the First Menu-Services in main Nav is clickable
    chaiExpect(true, await HomePage.checkIsClickable(1));
    //Asserting the second Menu-Pensions in main Nav is clickable
    chaiExpect(true, await HomePage.checkIsClickable(2));
    //Asserting the third Menu-Investments in main Nav is clickable
    chaiExpect(true, await HomePage.checkIsClickable(3));
    //Asserting the fourth Menu-Help and Learning in main Nav is clickable
    chaiExpect(true, await HomePage.checkIsClickable(4));
    //Asserting the fifth Menu in-News main Nav is clickable
    chaiExpect(true, await HomePage.checkIsClickable(5));

  });


});

