import Helper from '../../helper/helper';
import AddRemovePage from '../pages/AddRemove.page';
import {expect} from 'chai';

const envURLs = Helper.parseJsonFile('./environments/env.json');
const h3TitleTex = "Broken Images";
const h3Title = "h3";

//#region //Preparation
before('land to main url',async () => {
  await browser.url(envURLs.LOG_IN+"broken_images");
});
//#endregion
describe('Verify broken images',()=>{
  it('Verify Title', async ()=>{
    await expect(await AddRemovePage.isTitleDisplayed(h3Title)).true;
    await expect(await AddRemovePage.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});