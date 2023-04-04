import { expect as chaiExpect } from "chai";
import HomePage from "../pageobjects/home.page";
import InvstmentMktPage from "../pageobjects/invstmnts.markets.page";
import elementUtil from "../elementUtil";
import constant from "../constant";

describe('Investment Market page checks', () => {

    it('Check the Markets page displays the heading', async() => {

        HomePage.open();
        await HomePage.acceptbtnActn();
        await elementUtil.doClick(InvstmentMktPage.investmentParent);
        await elementUtil.doClick(InvstmentMktPage.allMrktLnk);
        chaiExpect(await (await elementUtil.doGetText(InvstmentMktPage.intrntnlMrktsHeading))).to.be.equal(constant.INTERNATIONMARKETS_HEADER);

    })



});