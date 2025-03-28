import { Given, When, Then } from '@cucumber/cucumber';
import { chromium , Browser, Page , Locator} from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

async function waitForVisibility(locator: Locator, timeout: number = 5000): Promise<boolean> {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    if (await locator.isVisible()) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait 100ms before retrying
  }
  throw new Error('Element not visible within timeout');
}

Given('User navigate to the login page', async function () {
    chromium.launch({ headless: false });
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://buianthai.online/orangehrm/web/index.php'); // Replace with your login URL
  });

Given('Verify that login form loaded', async function () {
    await expect(page.locator('//input[@name="username"]')).toBeVisible();
    await expect(page.locator('//input[@name="password"]')).toBeVisible();
    await expect(page.locator('//button[@type="submit" and normalize-space()="Login"]')).toBeVisible();
  });   

When('User enter valid username and password', async function () {
    await page.locator('//input[@name="username"]').waitFor({ state: 'visible' });
    await expect(page.locator('//input[@name="username"]')).toBeEnabled();
    await page.locator('//input[@name="username"]').fill('TinaNguyen');

    await page.locator('//input[@name="password"]').waitFor({ state: 'visible' });
    await expect(page.locator('//input[@name="password"]')).toBeEnabled();
    await page.locator('//input[@name="password"]').fill('Admin@1234');    
  });

When('User click on login button', async function () {
  await page.locator('//button[@type="submit" and normalize-space()="Login"]').waitFor({ state: 'visible' });
  await expect(page.locator('//button[@type="submit" and normalize-space()="Login"]')).toBeEnabled();
  await page.locator('//button[@type="submit" and normalize-space()="Login"]').click();
  });

Then('Verify that user redirected to the dashboard page', async function () {
  const dashboardHeaderIsVisible = await waitForVisibility(page.locator('//h6[text()="Dashboard"]'), 5000);
  const dashboardSideMenuIsVisible = await waitForVisibility(page.locator('//nav[@aria-label="Sidepanel"]'), 5000);
    if (!dashboardHeaderIsVisible|| !dashboardSideMenuIsVisible) {
      throw new Error('Dashboard failed to load.');
    }
  });

When('User enter the username as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('User enter the password as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('User enter valid username', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('User enter valid password', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
         
Then('Verify error message {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


