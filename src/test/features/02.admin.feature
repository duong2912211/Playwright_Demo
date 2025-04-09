@Admin
Feature: Admin page feature

Background: 
    Given User loged in as valid user
    Then Verify that user redirected to the dashboard page
    When User navigate to the "Admin" page
    Then Verify that admin page loaded

Scenario: 02.01. Add User in Admin page
    When User click on the "Add" button
    Then Verify that the Add User form is displayed
    When User choose the "User Role" field value is "Admin"
    When User choose the "Status" field value is "Enabled"
    And User choose the Employee Name is ""
    And User enter the "Username" is "ntpduong"
    And User enter the "Password" is "Duong1234"
    And User enter the "Confirm Password" is "Duong1234"
    And User click on the "Save" button

    # When User navigate to the admin page
    # Then Verify that admin page loaded
    # When User enter the search Username field is ""
    # When User click on the "Search" button
    # Then Verify that the new user is displayed in the user list