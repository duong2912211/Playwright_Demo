import { Page } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Specific selectors
  private dashboardHeader = `//h6[normalize-space()='Dashboard']`;
  private sidePanel = `//nav[@aria-label='Sidepanel']`;

  // Methods
  async isDashboardVisible() {
    await this.page.waitForSelector(this.dashboardHeader, { state: 'visible' });
    return this.page.isVisible(this.dashboardHeader);
  }

  async isSidePanelVisible() {
    return this.page.isVisible(this.sidePanel);
  }
}