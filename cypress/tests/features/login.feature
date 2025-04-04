Feature: User Login

Scenario: Successful Login with created account
  Given I navigate to the login page
  When I login to the application with created account
  Then I should be logged in successfully
