import { config } from 'dotenv';
config();

class Page {

  public async pause(milliseconds: number): Promise<void> {
    await browser.pause(milliseconds);
  }

  public async getElement(element: string | WebdriverIO.Element): Promise<WebdriverIO.Element> {
    return $(element);
  }

  public async getAllElements(elements: string): Promise<WebdriverIO.Element[]> {
    return $$(elements);
  }

  public async click(element: string | WebdriverIO.Element): Promise<void> {
    await (await this.getElement(element)).click();
  }

  public async clearValue(element: string | WebdriverIO.Element): Promise<void> {
    await this.click(element);
    while ((await (await this.getElement(element)).getValue()) !== '') {
        await browser.keys(['Control', 'Delete']);
        await browser.keys(['Control', 'Backspace']);
    }
  }

  public async clickEnterKey(): Promise<void> {
    await browser.keys("\uE007")
  }

  public async getText(element: string | WebdriverIO.Element): Promise<string> {
    await this.waitUntilElementDisplayed(element);
    return (await this.getElement(element)).getText();
  }

  public async getValue(element: string | WebdriverIO.Element): Promise<string> {
    await this.waitUntilElementDisplayed(element);
    return (await this.getElement(element)).getValue();
  }

  public async isPropertyEntered(element: any, value: string): Promise<boolean> {
    const text = await (await this.getElement(element)).getProperty('value');
    return text === value;
  }

  public async getElementValue(element: string): Promise<string> {
    await this.waitUntilElementDisplayed(element);
    return (await this.getElement(element)).getValue();
  }

  public async getSelectFieldValue(selectField: string | WebdriverIO.Element): Promise<string> {
    const selectElement = await this.getElement(selectField);
    return await browser.execute((selectFld) => {
        // @ts-ignore
        return selectFld.options[selectFld.selectedIndex].text;
    }, selectElement);
  }

  public async getElementAttribute(element: string | WebdriverIO.Element, attributeName: string): Promise<string> {
    return (await this.getElement(element)).getAttribute(attributeName);
  }

  public async addValue(element: string, value: string): Promise<void> {
    await this.waitUntilElementDisplayed(element);
    await (await this.getElement(element)).addValue(value);
  }

  public async setValue(element: string | WebdriverIO.Element, value: string): Promise<void> {
    await this.waitUntilElementDisplayed(element);
    await (await this.getElement(element)).setValue(value);
  }

  public async scrollElementIntoViewTop(element: string): Promise<void> {
    await (await this.getElement(element)).scrollIntoView({behavior: 'smooth'});
  }

  public async scrollElementIntoViewBottom(element: string): Promise<void> {
    await (await this.getElement(element)).scrollIntoView(false);
  }

  public async isTextEntered(element: string | WebdriverIO.Element, value: string): Promise<boolean> {
    let text = await this.getText(element);
    return text === value;
  }

  public async isValueEntered(element: string | WebdriverIO.Element, value: string): Promise<boolean> {
    let text = await this.getValue(element);
    return text === value;
  }

  public async isEnteredValueNotEmpty(element: string | WebdriverIO.Element): Promise<boolean> {
    let text = await this.getText(element);
    return text.length > 0;
  }

  public async isElementClickable(element: string | WebdriverIO.Element): Promise<boolean> {
    return (await this.getElement(element)).isClickable();
  }

  public async isElementEnabled(element: string | WebdriverIO.Element): Promise<boolean> {
    return (await this.getElement(element)).isEnabled();
  }

  public async isElementDisplayed(element: string | WebdriverIO.Element): Promise<boolean> {
    return (await this.getElement(element)).isDisplayed();
  }

  public async isElementExisting(element: string | WebdriverIO.Element): Promise<boolean> {
    return (await this.getElement(element)).isExisting();
  }

  public async areElementsDisplayed(elements: string): Promise<boolean> {
    if ((await this.getAllElements(elements)).length === 0) {
        return false;
    }

    for (const element of await this.getAllElements(elements)) {
        if (!(await this.isElementDisplayed(element))) {
            return false;
        }
    }
    return true;
  }

  public async waitUntilElementDisplayed(element: string | WebdriverIO.Element): Promise<void> {
    await browser.waitUntil(() => this.isElementDisplayed(element));
  }

  public async waitUntilElementNotDisplayed(element: string | WebdriverIO.Element): Promise<void> {
    await browser.waitUntil(async () => !(await this.isElementDisplayed(element)));
  }

}

export default new Page();
