import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";
import { pageFixture } from "../../hooks/pageFixture";

export default class LeavePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyLeavePageLoaded() {
        await expect(pageFixture.page.locator(pageFixture.leaveElements.pagesTitle("Leave"))).toBeVisible();
    }

    async verifyAddLeaveTypeFormLoaded() {
        await expect(pageFixture.page.locator(pageFixture.leaveElements.addLeaveTypeTitle())).toBeVisible();
        await expect(pageFixture.page.locator(pageFixture.leaveElements.isEntitlementSituationalForm())).toBeVisible();
    }

    async verifyLeaveTypeAdded(leaveTypeName: string) {
        await expect(pageFixture.page.locator(pageFixture.leaveElements.leaveTypeRecord(leaveTypeName))).toBeVisible();
    }
}