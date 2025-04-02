import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, Locator, BrowserContext } from 'playwright';
import { pageFixture } from "./pageFixture";
import LoginPage from "../test/pages/loginPage";

let browser: Browser;
let context: BrowserContext;
let loginPage: LoginPage;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.loginPage = new LoginPage(page);
});

After(async function ({ pickle, result }) {
    // Screenshot on failure
    if (result?.status === Status.FAILED) {
        const screenshot = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}`, type: 'png' });
        console.log('Screenshot taken:', screenshot);
        await this.attach(screenshot, 'image/png');
    }
    // Close the page and context after each scenario
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});