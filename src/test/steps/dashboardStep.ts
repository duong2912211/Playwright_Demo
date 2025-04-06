import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';

Then('Verify that user redirected to the dashboard page', async function () {
    await pageFixture.dashboardPage.verifyDashboardFormLoaded(5000);
});