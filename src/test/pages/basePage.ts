import { expect, Page } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


export default class BasePage {
    constructor(private page :Page) { }

    async goto(subUrl: string) {
        await this.page.goto("https://buianthai.online/orangehrm/web/index.php" + subUrl, {
            waitUntil: "domcontentloaded"
        });
    }

    // Wait for the element to be match with the condition
    async waitForElementVisible(locator: string, timeout?: number): Promise<void> {
        try {
            await this.page.waitForSelector(locator, { state: 'visible', timeout: timeout ?? 2000 });
        }
        catch (error) {
            console.error(`Element ${locator} not visible within ${timeout ?? 2000}ms`);
            throw error;
        }
        
    }

    async waitForElementEnabled(locator: string, timeout: number): Promise<void> {
        try {
            await this.page.waitForSelector(locator, { state: 'attached', timeout: timeout ?? 2000 });
            await this.page.waitForSelector(locator, { state: 'visible', timeout: timeout ?? 2000 });
            await this.page.isEnabled(locator);
        }
        catch (error) {
            console.error(`Element ${locator} not clickable within ${timeout ?? 5000}ms`);
            throw error;
        }
    }

    // Actions
    async clickElement(locator: string): Promise<void> {
        await this.page.click(locator);
    }

    async fillInputField(locator: string, value: string, timeout?: number): Promise<void> {
        await this.waitForElementEnabled(locator, timeout ?? 2000);
        await this.page.fill(locator, '');
        await this.page.fill(locator, value);
    }

    async getElementText(locator: string): Promise<string> {
        const value = await this.page.textContent(locator);
        if (!value || value.trim() === '') {
            throw new Error(`Element ${locator} is either not found or has no text content`);
        }
        return value.trim();
    }
}