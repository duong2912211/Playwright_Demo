Feature: Login functionality

  Scenario: User can log in with valid credentials
    Given the user navigates to the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should see the dashboard