import Page from "./Page";

class Base {
  async getHeaderText(header){
    return await Page.getText(header);
  }
  async waitTitleDisplayed(header){
      await Page.waitUntilElementDisplayed(header);
  }
  async isTitleDisplayed(header){
      return await Page.isElementDisplayed(header)
  }
}

export default Base;