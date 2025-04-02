import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage() {
        await this.goto("/auth/login");
    }

    async verifyLoginFormLoaded(timeout?: number) {
        await this.waitForElementVisible('//input[@name="username"]', timeout);
        await this.waitForElementVisible('//input[@name="password"]', timeout);
        await this.waitForElementVisible('//button[@type="submit" and normalize-space()="Login"]', timeout);
    }

}