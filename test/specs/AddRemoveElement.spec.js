const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const addRemovePage = require('../pages/AddRemove.page');
const {expect} = require('chai');

const h3TitleTex = "Add/Remove Elements";
const h3Title = "h3";

//#region //Preparation
before('land to main url', async () => {
  await browser.url(envURLs.LOG_IN+"add_remove_elements/");
});
//#endregion
describe('Check Add Remove elements page defaults', () => {
  //#region //Inspect login form
  it('Check h3 header displayed', async () => {
    await expect(await addRemovePage.isTitleDistpayed(h3Title)).true;
    await expect(await addRemovePage.getHeaderText(h3Title)).contain(h3TitleTex);
  });
  it('Verify Add button', async ()=>{
    await expect(await addRemovePage.isAddBtnDisplayed()).true;
  });
});

describe('Verify Add Remove elements', () => {
  //#region //Inspect login form
  it('Add element', async () => {
    await addRemovePage.clickAddBtn();
    await expect(await addRemovePage.isDeleteBtnDisplayed()).true;
  });
  it('Remove element', async ()=>{
    await expect(await addRemovePage.isDeleteBtnDisplayed()).true;
    await addRemovePage.clickDeleteBtn();
    await browser.pause(1000);
    await expect(await addRemovePage.isDeleteBtnDisplayed()).false;
  });
});