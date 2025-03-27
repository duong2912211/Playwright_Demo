import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { BasePage } from '../pages/basePage';

test('User can log in and see the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const basePage = new BasePage(page);

  // Given: User navigates to the login page
  await basePage.navigateToPage();

  // When: User inputs the username and password and clicks login
  await loginPage.loginIntoEnv();

  // Then: User should be navigated to the dashboard page
  expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
  expect(await dashboardPage.isSidePanelVisible()).toBeTruthy();
});