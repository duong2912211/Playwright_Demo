import { Page } from '@playwright/test';
import { BaseElements } from '../elements/baseElement';
import { BASE_URL } from '../constants';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPage() {
    await this.page.goto(BASE_URL);
  }

  // Click methods
  async clickButtonHasText(textValue: string) {
    await this.page.click(BaseElements.buttonHasText(textValue));
  }

  // Verify methods
  async isElementVisibled(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    return this.page.isVisible(selector);
  }

  async isElementNotVisible(selector: string) {
    await this.page.waitForSelector(selector, { state: 'hidden' });
    const isVisible =  await this.page.isVisible(selector);
    if (isVisible){
        throw new Error(`Element with selector ${selector} is visible`);
    }
  }

  async isElementEnabled(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    return this.page.isEnabled(selector);
  }

  async isElementNotEnabled(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    const isEnabled =  await this.page.isEnabled(selector);
    if (isEnabled){
        throw new Error(`Element with selector ${selector} is enabled`);
    }
  }
}