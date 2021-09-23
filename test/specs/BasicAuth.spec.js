const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const accounts = helper.parseJsonFile('./environments/accounts.json');
const logInPage = require('../pages/LogIn.page');
const {expect} = require('chai');

const confirmMessageText = "Congratulations! You must have the proper credentials.";

//#region //Preparation
before('land to main url',async () => {
  await browser.url(envURLs.LOG_IN+"basic_auth/");
});
//#endregion
describe('Basic Auth in modal',()=>{
  it('Login with correct credential',async ()=>{
    await browser.url(`https://${accounts["superuser"].username}:${accounts["superuser"].password}@the-internet.herokuapp.com/basic_auth`);
    await expect(await logInPage.getMessageText()).contain(confirmMessageText);
  });
});