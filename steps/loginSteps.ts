const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/loginPage.ts');
const { DashboardPage } = require('../pages/dashboardPage.ts');
const { expect } = require('@playwright/test');
const { Hooks } = require('../hooks/hooks.ts');

let loginPage;
let dashboardPage;
let hooks;

Given('the user navigates to the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToPage();
});

When('the user enters valid credentials', async function () {
  await loginPage.enterUsername(process.env.VALID_USERNAME || 'TinaNguyen');
  await loginPage.enterPassword(process.env.VALID_PASSWORD || 'Admin@1234');
});

When('clicks the login button', async function () {
  await loginPage.clickLoginButton();
});

Then('the user should see the dashboard', async function () {
  dashboardPage = new DashboardPage(this.page);
  expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
});