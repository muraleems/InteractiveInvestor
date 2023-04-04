import CommonUtility from "./common.utility";
import { expect as chaiExpect } from "chai";

class PensionSIIPChrgPage extends CommonUtility {

    //using getter functions to add the selectors

    get pensionsParent() {
        return $('span[title="Pensions"]');
    }
    get siipMenuLnk() {
        return $('a=SIPP charges');
    }
    get siipHeader() {
        return $('h1=SIPP charges');
    }
    get opnSiipBtn() {
        return $('span[title="Open a SIPP"]');
    }
    get trnfrUrPnsnBtn() {
        return $('span[title="Transfer your pension"]');
    }

    get siipfeesnChrgsLnk() {
        return $('a=SIPP fees and charges');
    }

    get breadcrumb() {
        return $('//div[@data-id="page-sections"]//div[@type="breadcrumb"]');
    }

    //actions
    async opnSiipBtnActn() {
        await this.opnSiipBtn.click();
    }
    async trnfrUrPnsnBtnActn() {
        await this.trnfrUrPnsnBtn.click();
    }
    async siipfeesnChrgsLnkActn() {
        await this.siipfeesnChrgsLnk.click();
    }


}

//exporting the instance of the PensionsSIIPChargePage class using new keyword
export default new PensionSIIPChrgPage();