Feature: To test the sign up flow.

  # Assessment Task Objective: Test the sign up flow [Positive+ Negative included].

  Scenario: Successful Signup
    Given I open the signup page
    When I enter valid details
    And I submit the signup form
    Then I should see a success message

  Scenario: Verify error message for existing email
    Given I open the signup page
    When I enter all details with an existing email
    And I submit the signup form
    Then I should see an error message "There is already an account with this email address"

  Scenario: Verify error message for invalid email format
    Given I open the signup page
    When I enter an invalid email
    And I submit the signup form
    Then I should see an error message "Please enter a valid email address (Ex: johndoe@domain.com)"

  Scenario: Verify password strength validation
    Given I open the signup page
    When I enter a weak password
    And I submit the signup form
    Then I should see an error message "Password Strength: Weak"

  Scenario: Verify password mismatch error
    Given I open the signup page
    When I enter mismatched passwords "Password1" and "Password2"
    And I submit the signup form
    Then I should see an error message "Please enter the same value again."

  Scenario: Verify account creation without entering required fields
    Given I open the signup page
    When I leave all fields empty
    And I submit the signup form
    Then I should see an error message for each field "This is a required field."

  Scenario: Verify UI elements on the sign-up page
    Given I open the signup page
    Then I should see all required fields and buttons