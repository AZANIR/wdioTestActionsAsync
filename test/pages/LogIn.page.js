const Page = require('./Page');
const Base = require('./Base.js');

const footerSelector = '#page-footer';
const confirmMessage = "#content p";

class LogInPage extends Base{
    async getPageText(){
        await browser.pause(10000);
        return await Page.getElementText("body");
    }
    async getMessageText(){
        return await Page.getElementText(confirmMessage)
    }
    //#region //links
    async isLinkDisplayed(linkSelector){
        return await Page.isElementDisplayed(linkSelector);
    }
    async getLinkText(linkSelector){
        return await Page.getElementText(linkSelector);
    }
    async getFooterText(){
        return await Page.getElementText(footerSelector);
    }
    //#endregion
}

module.exports = new LogInPage();