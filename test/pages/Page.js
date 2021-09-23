const advancedBtn = '#details-button, #advancedButton';
const proceedLnk = '#proceed-link, #exceptionDialogButton';
const defaultTimeout = 10000; // 10sec
class Page {

    async getElement(element) {
        return await $(element);
    }

    async getAllElements(element) {
        return (await $$(element));
    }

    async getElementByIndex(element, index) {
        return (await this.getAllElements(element))[index];
    }

    async isElementClickable(element) {
        return (await this.getElement(element)).isClickable();
    }

    async isElementByIndexClickable(element, index) {
        return (await this.getElementByIndex(element, index)).isClickable();
    }

    async waitUntilClickable(element, timeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }

    async waitUntilClickableByIndex(element, index) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndex(element, index)).isClickable();
        });
    }

    async isElementDisplayed(element) {
        return (await this.getElement(element)).isDisplayed();
    }

    async isElementByIndexDisplayed(element, index) {
        return (await this.getElementByIndex(element, index)).isDisplayed();
    }

    async waitUntilDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitUntilNotDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return !(await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitUntilDisplayedByIndex(element, index) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndex(element, index)).isDisplayed();
        });
    }

    async isElementSelected(element) {
        return (await this.getElement(element)).isSelected();
    }

    async isElementByIndexSelected(element, index) {
        return (await this.getElementByIndex(element, index)).isSelected();
    }

    async waitUntilSelected(element) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isSelected();
        });
    }

    async waitUntilSelectedByIndex(element, index) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndex(element, index)).isSelected();
        });
    }

    async isElementExisting(element) {
        return (await this.getElement(element)).isExisting();
    }

    async isElementNotExisting(element) {
        return !(await this.getElement(element)).isExisting();
    }

    async isElementByIndexExisting(element, index) {
        return (await this.getElementByIndex(element, index)).isExisting();
    }

    async waitUntilExists(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isExisting();
        }, {timeout: timeout});
    }

    async waitUntilExistsByIndex(element, index) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndex(element, index)).isExisting();
        });
    }

    async waitUntilExistsWithRefresh(element, timeout = defaultTimeout) {
        await browser.refresh();
        await this.waitUntilExists(element, timeout);
    }

    async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }

    async clickByIndex(element, index) {
        await this.waitUntilClickableByIndex(element, index);
        await (await this.getElementByIndex(element, index)).click();
    }

    async clickDropdownItemByIndex(element, index) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByIndex(index);
    }

    async clickDropdownItemByText(element, text) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByVisibleText(text);
    }

    async getElementText(element) {
        await this.waitUntilDisplayed(element);
        return (await this.getElement(element)).getText();
    }

    async getElementByIndexText(element, index) {
        await this.waitUntilDisplayedByIndex(element, index);
        return (await this.getElementByIndex(element, index)).getText();
    }

    async waitUntilElementIncludesText(element, text) {
        await browser.waitUntil(async () => {
            return (await this.getElementText(element)).includes(text);
        });
    }

    async waitUntilElementByIndexIncludesText(element, index, text,timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndexText(element, index)).includes(text);
        }, {timeout: timeout});
    }

    async getElementValue(element) {
        await this.waitUntilDisplayed(element, defaultTimeout);
        return (await this.getElement(element)).getValue();
    }

    async getElementByIndexValue(element, index) {
        await this.waitUntilDisplayedByIndex(element, index);
        return (await this.getElementByIndex(element, index)).getValue();
    }

    async waitUntilElementIncludesValue(element, value) {
        await browser.waitUntil(async () => {
            return (await this.getElementValue(element)).includes(value);
        });
    }

    async waitUntilElementByIndexIncludesValue(element, index, value) {
        await browser.waitUntil(async () => {
            return (await this.getElementByIndexValue(element, index)).includes(value);
        });
    }

    async getElementAttribute(element, attribute) {
        return await (await this.getElement(element)).getAttribute(attribute);
    }
    async getElementCssProperty(element, attribute) {
        return await (await this.getElement(element)).getCSSProperty(attribute);
    }

    async getElementByIndexAttribute(element, index, attribute) {
        await this.waitUntilExistsByIndex(element, index);
        return await (await this.getElementByIndex(element, index)).getAttribute(attribute);
    }

    async waitUntilElementIncludesAttribute(element, attribute, text) {
        await browser.waitUntil(async () => {
            return await (await this.getElementAttribute(element, attribute)).includes(text);
        });
    }

    async waitUntilElementByIndexIncludesAttribute(element, index, attribute, text) {
        await browser.waitUntil(async () => {
            return await (await this.getElementByIndexAttribute(element, index, attribute)).includes(text);
        });
    }

    async scrollElementIntoViewTop(element) {
        await (await this.getElement(element)).scrollIntoView();
    }

    async scrollElementIntoViewBottom(element) {
        await (await this.getElement(element)).scrollIntoView(false);
    }

    async scrollElementByIndexIntoViewTop(element, index) {
        await (await this.getElementByIndex(element, index)).scrollIntoView();
    }

    async scrollElementByIndexIntoViewBottom(element, index) {
        await (await this.getElement(element, index)).scrollIntoView(false);
    }

    async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async setValueByIndex(element, index, value) {
        await this.waitUntilDisplayedByIndex(element, index);
        await (await this.getElementByIndex(element, index)).setValue(value);
    }

    async addValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).addValue(value);
    }

    async addValueByIndex(element, index, value) {
        await this.waitUntilDisplayedByIndex(element, index);
        await (await this.getElementByIndex(element, index)).addValue(value);
    }

    async clearValue(element) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).clearValue();
    }

    async clearValueByIndex(element, index) {
        await this.waitUntilDisplayedByIndex(element, index);
        await (await this.getElementByIndex(element, index)).clearValue();
    }

    async clearValueByBackspace(element) {
        await this.waitUntilDisplayed(element);
        const inputLength = (await this.getElementValue(element)).length;
        let i = 0
        for (i = 0; i <= inputLength; i++) {
            await this.addValue(element, 'Backspace');
        }
    }

    async clickBackspace(element) {
        await this.addValue(element, 'Backspace');
    }

    async switchToSsoMode(key, value) {
        await browser.execute(async function (key, value) {
            await this.localStorage.setItem(key, value)
        }, key, value)
        await browser.refresh();
    }

    async getListSize(element) {
        return (await this.getAllElements(element)).length;
    }

    async isBrowserAdvancedBtnDisplayed() {
        return await this.isElementDisplayed(advancedBtn);
    }

    async clickBrowserAdvancedBtn() {
        await this.click(advancedBtn);
    }

    async clickBrowserProceedLnk() {
        await this.click(proceedLnk);
    }

    async clickEnterKey() {
        await browser.keys("\uE007")
    }
}

module.exports = new Page();