const { setWorldConstructor, World : CucumberWorld } = require('@cucumber/cucumber');
const { chromium} = require( 'playwright');

export class Hooks extends CucumberWorld {
    browser;
    context;
    page;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(Hooks);
