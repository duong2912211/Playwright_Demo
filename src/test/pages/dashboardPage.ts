import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToDashboardPage() {
        await this.goto("/dashboard/index");
    }

    async verifyDashboardFormLoaded(timeout?: number) {
        // await this.waitForElementVisible('//input[@name="username"]', timeout);
        // await this.waitForElementVisible('//input[@name="password"]', timeout);
        // await this.waitForElementVisible('//button[@type="submit" and normalize-space()="Login"]', timeout);
    }

}