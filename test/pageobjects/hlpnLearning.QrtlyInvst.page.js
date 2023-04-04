
class HelpandLearningPage {

    //using getter functions to add the selectors/locators
    get heading() {
        return $('h1=Quarterly Investment Review');
    }
    get learningParent() {
        return $('span[title="Help & learning"]');
    }
    get qtrlyInvstmentLnk() {
        return $('a=Quarterly Investment Review');
    }
    get tagNameforSpr60imgLnk() {
        return $('//a[@title="ii Super 60 performance review 2022"]');
    }

}
export default new HelpandLearningPage();