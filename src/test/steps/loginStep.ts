import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import LoginPage from '../page/loginPage';
import DashboardPage from '../page/dashboardPage';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
loginPage = new LoginPage(pageFixture.page);
dashboardPage = new DashboardPage(pageFixture.page);

Given('User navigate to the login page', { timeout: 20000 }, async function () {
  loginPage.navigateToLoginPage();
});

Given('Verify that login form loaded', async function () {
  loginPage.verifyLoginFormLoaded();
});

When('User enter valid username and password', async function () {
  loginPage.fillInputField('//input[@name="username"]', 'TinaNguyen');
  loginPage.fillInputField('//input[@name="password"]', 'Admin@1234');
});

When('User click on login button', async function () {
  loginPage.waitForElementEnabled('//button[@type="submit" and normalize-space()="Login"]', 5000);
  loginPage.clickElement('//button[@type="submit" and normalize-space()="Login"]');
});

Then('Verify that user redirected to the dashboard page', async function () {
  dashboardPage.verifyDashboardFormLoaded();
});

When('User enter the username as {string}', async function (username) {
  loginPage.fillInputField('//input[@name="username"]', username);
});

When('User enter the password as {string}', async function (password) {
  loginPage.fillInputField('//input[@name="password"]', password);
});

When('User enter valid username', async function () {
  loginPage.fillInputField('//input[@name="username"]', 'TinaNguyen');
});

When('User enter valid password', async function () {
  loginPage.fillInputField('//input[@name="password"]', 'Admin@1234');
});

Then('Verify error message {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


