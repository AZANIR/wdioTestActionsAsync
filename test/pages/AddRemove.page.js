const Page = require('./Page');
const Base = require('./Base.js');

const addButton = "//button[text()='Add Element']";
const deleteBtn = "#elements button";

class AddRemovePage extends Base{
  async isAddBtnDisplayed(){
     return await Page.isElementDisplayed(addButton);
  }
  async clickAddBtn(){
    await Page.click(addButton);
  }
  async isDeleteBtnDisplayed(){
    return await Page.isElementDisplayed(deleteBtn);
  }
  async clickDeleteBtn(){
    await Page.click(deleteBtn);
  }
}

module.exports = new AddRemovePage();