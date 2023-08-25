import Helper from '../../helper/helper';
const envURLs = Helper.parseJsonFile('./environments/env.json');
import LogInPage from '../pages/LogIn.page';
import {expect} from 'chai';

const footerLinkText = "Elemental Selenium";
const footerLink = '#page-footer a';
const h2Header = 'h2';

//#region //Preparation
before('land to main url',async () => {
    await browser.url(envURLs.LOG_IN);
    await LogInPage.waitTitleDisplayed(h2Header);
});
//#endregion
describe('Check login page defaults', () => {
    //#region //Inspect login form
    it('Check h2 header displayed', async () => {
        await expect(await LogInPage.isTitleDisplayed(h2Header)).true;
        await expect(await LogInPage.getHeaderText(h2Header)).contain('Available Examples');
    });
    it('Ispect footer text', async () => {
        await expect(await LogInPage.getFooterText()).contain('Powered by Elemental Selenium');

    });
    it('Verify Footer link', async ()=>{
        await expect(await LogInPage.isLinkDisplayed(footerLink)).true;
        await expect(await LogInPage.getLinkText(footerLink)).contain(footerLinkText);
    });
    //#endregion
});
