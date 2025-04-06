import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';

Then('Verify that leave page loaded', async function(){
    await pageFixture.leavePage.verifyLeavePageLoaded();
  })

Then('Verify that the Add Leave Types form is displayed', async function() {
    await pageFixture.leavePage.verifyAddLeaveTypeFormLoaded();
})

Then('Verify that the {string} is displayed in the leave types list', async function(leaveTypeName: string) {
  await pageFixture.leavePage.verifyLeaveTypeAdded(leaveTypeName);
})

