import { Page } from "@playwright/test";
import BaseElements from "./baseElements";

export default class LeaveElements extends BaseElements{
    constructor(page: Page) {
        super(page);
    }

    addLeaveTypeTitle(): string {
        return `//h6[normalize-space()="Add Leave Type"]`;
    }

    isEntitlementSituationalForm(): string {
        return `//div[contains(@class,"is-entitlement-situational")]/..`;
    }
    
    leaveTypeRecord(name: string): string {
        return `//div[@role="rowgroup" and contains(@class,"body")]//div[text()="${name}"]`;
    }
}