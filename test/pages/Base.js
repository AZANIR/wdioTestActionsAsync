const Page = require('./Page');

module.exports = class Base{
  async getHeaderText(header){
    return await Page.getElementText(header);
  }
  async waitTitleDistpayed(header){
      await Page.waitUntilDisplayed(header);
  }
  async isTitleDistpayed(header){
      return await Page.isElementDisplayed(header)
  }
}