import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";
import { pageFixture } from "../../hooks/pageFixture";
import adminElements from "../elements/adminElements";

export default class AdminPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyAdminPageLoaded() {
        await expect(pageFixture.page.locator(pageFixture.adminElements.pagesTitle("Admin"))).toBeVisible();
        await expect(pageFixture.page.locator(pageFixture.adminElements.pagesTitle("User Management"))).toBeVisible();
    }

    async verifyAddUserFormDisplayed() {
        await this.waitForElementVisible(pageFixture.adminElements.selectFieldWithTitle("User Role"), 5000);
        await this.waitForElementVisible(pageFixture.adminElements.selectFieldWithTitle("Status"), 5000);
        await this.waitForElementVisible(pageFixture.adminElements.inputFieldWithTitle("Username"), 5000);
        await this.waitForElementVisible(pageFixture.adminElements.inputFieldWithTitle("Password"), 5000);
        await this.waitForElementVisible(pageFixture.adminElements.inputFieldWithTitle("Confirm Password"), 5000);
    }
}