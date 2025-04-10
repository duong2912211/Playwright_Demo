@Leave
Feature: Leave page feature

  Background:
    Given User loged in as valid user
    Then Verify that user redirected to the dashboard page
    When User navigate to the "Leave" page
    Then Verify that leave page loaded

  Scenario: 03.01. Add Leave Types
    When User click on dropdown "Configure" on top bar menu
    And User select "Leave Types" from dropdown top bar menu
    And User click on the "Add" button
    Then Verify that the Add Leave Types form is displayed
    When User enter the "Name" is "Annual Leave"
    And User tick on option "No" of "Is Entitlement Situational?" checkbox
    And User click on the "Save" button
    And User waits for 15 seconds

    Then Verify that the Add Leave Types form is displayed
    And Verify that the "Annual Leave" is displayed in the leave types list

  # Scenario: 03.01. Add Leave Entitlement
  #   When User click on dropdown "" on top bar menu
  #   And User select "" from dropdown top bar menu
  #   Then Verify that the Add Leave Entitlement form is displayed
  #   When User choose the Employee Name is ""
  #   And User choose the "Leave Type" field value is "Admin"
  #   When User click on the "Add" button
  #   Then Verify that the Add Leave form is displayed
  #   When User choose the "Leave Type" field value is "Annual Leave"
  #   When User click on the "Add" button
  #   Then Verify that the Add Leave form is displayed
  #   When User choose the "Leave Type" field value is "Annual Leave"
  #   When User choose the "Status" field value is "Enabled"
