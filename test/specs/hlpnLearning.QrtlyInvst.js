import { expect as chaiExpect } from "chai";
import HomePage from "../pageobjects/home.page";
import HlpnLearningQrtlyInvstPage from "../pageobjects/HlpnLearning.QrtlyInvst.page";
import elementUtil from "../elementUtil";
import constant from "../constant";

describe('Help and Learning Page checks', () => {

    it('Check the Help and Learning page have the correct URL', async () => {
        HomePage.open();
        await HomePage.acceptbtnActn();
        await elementUtil.doClick(HlpnLearningQrtlyInvstPage.learningParent);
        await elementUtil.doClick(HlpnLearningQrtlyInvstPage.qtrlyInvstmentLnk);
        chaiExpect(await browser.getUrl()).to.equal(constant.QTRLYINVSTREVIEW_URL);


    });
    it('Check the Help and Learning page displays the heading', async () => {

        chaiExpect(await (await elementUtil.doGetText(HlpnLearningQrtlyInvstPage.heading))).to.be.equal(constant.HELPANDLEARNINGQTRLYINVST_HEADER);
    });
    it('Check the first image with Text have correct value', async () => {
        console.log(await HlpnLearningQrtlyInvstPage.tagNameforSpr60imgLnk.getText());
        chaiExpect(await (await elementUtil.doGetText(HlpnLearningQrtlyInvstPage.tagNameforSpr60imgLnk))).to.be.include(constant.HELPNLEARNING_IMAGE_TEXT);

    });



});