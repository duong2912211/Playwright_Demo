import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';

Then('Verify that admin page loaded', async function () {
  await pageFixture.adminPage.verifyAdminPageLoaded();
})

Then('Verify that the Add User form is displayed', async function () {
  await pageFixture.adminPage.verifyAddUserFormDisplayed();
})

When('User choose the Employee Name is {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})