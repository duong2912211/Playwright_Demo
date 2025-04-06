import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';

//Button Steps
When('User click on the {string} button', async function (text: string) {
  await pageFixture.basePage.clickElement(pageFixture.baseElements.button(text));
})

//Select Field Steps
When('User choose the {string} field value is {string}', async function (fieldName: string, value: string) {
  await pageFixture.basePage.clickElement(pageFixture.adminElements.selectFieldWithTitle(fieldName));
  await pageFixture.basePage.clickElement(pageFixture.adminElements.selectFieldOption(value));
})

//Input Field Steps
When('User enter the {string} is {string}', async function (fieldName: string, value: string) {
  await pageFixture.basePage.fillInputField(pageFixture.adminElements.inputFieldWithTitle(fieldName), value);
})

//Sidebar Menu Steps
When('User navigate to the {string} page', async function (menuName: string) {
  await pageFixture.basePage.navigateToSubMenuPage(menuName);
})

//Top Bar Menu Steps
When('User click on dropdown {string} on top bar menu', async function (topBarMenuName: string) {
  await pageFixture.basePage.clickElement(pageFixture.baseElements.topBarMenuDropdown(topBarMenuName));
})

When('User select {string} from dropdown top bar menu', async function (option: string) {
  await pageFixture.basePage.clickElement(pageFixture.baseElements.topBarMenuDropdownOption(option));
})

//Checkbox Steps
When('User tick on option {string} of {string} checkbox', async function (option: string, checkboxTitle: string) {
  await pageFixture.basePage.clickElement(pageFixture.baseElements.checkBoxWithOptionAndTitle(checkboxTitle, option));
})