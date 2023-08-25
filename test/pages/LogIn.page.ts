import Page from './Page';
import Base from './Base';

const footerSelector = '#page-footer';
const confirmMessage = "#content p";

class LogInPage extends Base{
    async getPageText(){
        await browser.pause(10000);
        return await Page.getText("body");
    }
    async getMessageText(){
        return await Page.getText(confirmMessage)
    }
    async isLinkDisplayed(linkSelector){
        return await Page.isElementDisplayed(linkSelector);
    }
    async getLinkText(linkSelector){
        return await Page.getText(linkSelector);
    }
    async getFooterText(){
        return await Page.getText(footerSelector);
    }
}

export default new LogInPage();