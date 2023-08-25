import Helper from '../../helper/helper';
const envURLs = Helper.parseJsonFile('./environments/env.json');
const accounts = Helper.parseJsonFile('./environments/accounts.json');
import LogInPage from '../pages/LogIn.page';
import {expect} from 'chai';

const confirmMessageText = "Congratulations! You must have the proper credentials.";

//#region //Preparation
before('land to main url',async () => {
  await browser.url(envURLs.LOG_IN+"basic_auth/");
});
//#endregion
describe('Basic Auth in modal',()=>{
  it('Login with correct credential',async ()=>{
    await browser.url(`https://${accounts["superuser"].username}:${accounts["superuser"].password}@the-internet.herokuapp.com/basic_auth`);
    await expect(await LogInPage.getMessageText()).contain(confirmMessageText);
  });
});