import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from 'playwright';
import AdminElements from "../test/elements/adminElements";
import AdminPage from "../test/pages/adminPage";
import DashboardPage from "../test/pages/dashboardPage";
import LoginPage from "../test/pages/loginPage";
import { pageFixture } from "./pageFixture";
import BasePage from "../test/pages/basePage";
import BaseElements from "../test/elements/baseElements";
import LeavePage from "../test/pages/leavePage";
import LeaveElements from "../test/elements/leaveElements";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.basePage = new BasePage(page);
    pageFixture.baseElements = new BaseElements(page);
    pageFixture.loginPage = new LoginPage(page);
    pageFixture.adminPage = new AdminPage(page);
    pageFixture.adminElements = new AdminElements(page);
    pageFixture.dashboardPage = new DashboardPage(page);
    pageFixture.leavePage = new LeavePage(page);
    pageFixture.leaveElements = new LeaveElements(page);
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