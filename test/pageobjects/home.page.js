import elementUtil from "../elementUtil";
import CommonUtility from "./common.utility";
class HomePage extends CommonUtility {

    //using getter functions to add the selectors/locators
    //Main Nav All menu selector(parent)
    get parent() {
        return $('ul.ii-9e6kxj');
    }
    // Submenu parent for Services Menu.eg: Services--> Accounts
    get servsActParent() {
        return $('ul.ii-xlij4l');
    }

    get acceptbtn() {
        return $('button=Accept');
    }

    get servicesDrpdwn() {
        return $('span[title="Services"]');
    }
    get trdngActMenu() {
        return $('a=Trading Account');
    }

    get pensionsDrpdwn() {
        return $('span[title="Pensions"]');
    }
    get invstmntsDrpdwn() {
        return $('span[title="Investments"]');
    }
    get helpnLrngDrpdwn() {
        return $('span[title="Help & learning"]');
    }
    get newsDrpdwn() {
        return $('span[title="News"]');
    }

    //Page functions for the added selectors/locators
    async acceptbtnActn() {
        this.acceptbtn.click();
    }
    async navLinks(index) {
        return this.parent.$(`li:nth-child(${index})`);

    }
    async servslist(index1) {
        return this.servsActParent.$(`li:nth-child(${index1})`);
    }

    async getPageTitle() {
        return elementUtil.doGetTitle();
    }
    async getText() {
        return elementUtil.doGetText();
    }
    async checkIsClickable(index) {
        return elementUtil.doIsClickable(this.navLinks(index));

    }

    //Common function to access the URL
    open() {
        super.open('https://www.ii.co.uk/');
    }
}

//exporting the instance of the Homepage class using new keyword
export default new HomePage();