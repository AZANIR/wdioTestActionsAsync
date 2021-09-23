const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const logInPage = require('../pages/LogIn.page');
const {expect} = require('chai');

const footerLinkText = "Elemental Selenium";
const footerLink = '#page-footer a';
const h2Header = 'h2';

//#region //Preparation
before('land to main url',async () => {
    await browser.url(envURLs.LOG_IN);
    await logInPage.waitTitleDistpayed(h2Header);
});
//#endregion
describe('Check login page defaults', () => {
    //#region //Inspect login form
    it('Check h2 header displayed', async () => {
        await expect(await logInPage.isTitleDistpayed(h2Header)).true;
        await expect(await logInPage.getHeaderText(h2Header)).contain('Available Examples');
    });
    it('Ispect footer text', async () => {
        await expect(await logInPage.getFooterText()).contain('Powered by Elemental Selenium');

    });
    it('Verify Footer link', async ()=>{
        await expect(await logInPage.isLinkDisplayed(footerLink)).true;
        await expect(await logInPage.getLinkText(footerLink)).contain(footerLinkText);
    });
    //#endregion
});
