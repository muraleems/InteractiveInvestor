class ElementUtil {

    //common methods like click etc
    async doClick(element) {
        await element.isDisplayed();
        await element.click();
    }
    //method to get the text of an element
    async doGetText(element) {
        await element.isDisplayed();
        return element.getText();
    }
    //method to get the title of a page
    async doGetTitle() {
        return browser.getTitle();
    }
    //method to check whether an element is clickable 
    async doIsClickable(element) {
        await element.isDisplayed();
        return element.isClickable();
    }
}
export default new ElementUtil();