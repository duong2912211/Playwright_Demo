import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';

Given('User navigate to the login page', { timeout: 20000 }, async function () {
    await pageFixture.loginPage.navigateToLoginPage(); // Use async/await
});

Given('Verify that login form loaded', async function () {
    await pageFixture.loginPage.verifyLoginFormLoaded(); // Use async/await
});

When('User enter valid username and password', async function () {
    await pageFixture.loginPage.fillInputField('//input[@name="username"]', 'TinaNguyen');
    await pageFixture.loginPage.fillInputField('//input[@name="password"]', 'Admin@1234');
});

When('User click on login button', async function () {
    await pageFixture.loginPage.waitForElementEnabled('//button[@type="submit" and normalize-space()="Login"]', 5000);
    await pageFixture.loginPage.clickElement('//button[@type="submit" and normalize-space()="Login"]');
});

When('User enter the username as {string}', async function (username) {
    await pageFixture.loginPage.fillInputField('//input[@name="username"]', username);
});

When('User enter the password as {string}', async function (password) {
    await pageFixture.loginPage.fillInputField('//input[@name="password"]', password);
});

When('User enter valid username', async function () {
    await pageFixture.loginPage.fillInputField('//input[@name="username"]', 'TinaNguyen');
});

When('User enter valid password', async function () {
    await pageFixture.loginPage.fillInputField('//input[@name="password"]', 'Admin@1234');
});

Then('Verify error message {string}', async function (errorMessage) {
    // Add your verification logic here
});

Given('User loged in as valid user', async function () {
    await pageFixture.loginPage.navigateToLoginPage();
    await pageFixture.loginPage.verifyLoginFormLoaded();
    await pageFixture.loginPage.fillInputField('//input[@name="username"]', 'TinaNguyen');
    await pageFixture.loginPage.fillInputField('//input[@name="password"]', 'Admin@1234');
    await pageFixture.loginPage.waitForElementEnabled('//button[@type="submit" and normalize-space()="Login"]', 5000);
    await pageFixture.loginPage.clickElement('//button[@type="submit" and normalize-space()="Login"]');
})


