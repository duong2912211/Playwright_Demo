Feature: Login feature

Background: 
    Given User navigate to the login page
    And Verify that login form loaded

Scenario: 01.01.Login with valid credentials
    When User enter valid username and password
    And User click on login button
    Then Verify that user redirected to the dashboard page

# Scenario: 01.02.Login with incorrect username
#     When User enter the username as "ntpduong"
#     And User enter valid password
#     And User click on login button
#     Then Verify error message "Invalid username or password"

# Scenario: 01.03.Login with incorrect password
#     When User enter valid username
#     And User enter the password as "ntpduong"
#     And User click on login button
#     Then Verify error message "Invalid username or password"
