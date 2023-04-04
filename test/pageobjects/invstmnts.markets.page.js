import elementUtil from "../elementUtil";

class InvstmentMktPage {

    //using getter functions to add the selectors
    get intrntnlMrktsHeading() {
        return $('h1=International markets');
    }
    get investmentParent() {
        return $('span[title="Investments"]');
    }
    get allMrktLnk() {
        return $('a=All markets');
    }


}

//exporting the instance of the InvestmentMarketpage class using new keyword
export default new InvstmentMktPage();