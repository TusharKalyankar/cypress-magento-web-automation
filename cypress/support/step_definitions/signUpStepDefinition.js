import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import * as pages from "../pageObjects/index"

// Accessing the created methods in the particular page object that we created for small flows

Given("I open the signup page", () => {
  pages.signUpPage.goTo(Cypress.env('url') + "/customer/account/create/")
});

When("I enter valid details", () => {
  pages.signUpPage.fillSignupForm();
});

Then("I submit the signup form", () => {
  pages.signUpPage.submitForm();
});

Then("I should see a success message", () => {
  pages.signUpPage.verifySuccess();
});


When('I enter all details with an existing email', () => {
  pages.signUpPage.enterDetailsWithExistingEmail();
});

When('I enter an invalid email', () => {
  pages.signUpPage.enterInvalidEmail();
});

When('I enter a weak password', () => {
  pages.signUpPage.enterInvalidPassword();
});

When('I enter mismatched passwords {string} and {string}', (pass1, pass2) => {
  pages.signUpPage.enterMismatchedPasswords(pass1, pass2);
});

When('I leave all fields empty', () => {
  pages.signUpPage.leaveAllFieldsEmpty();
});

Then('I should see an error message {string}', (message) => {
  pages.signUpPage.verifyErrorMessage(message);
});

Then('I should see an error message for each field {string}', (message) => {
  pages.signUpPage.verifyFieldErrorMessages(message);
});

Then('I should see all required fields and buttons', () => {
  pages.signUpPage.verifyUIElements();
});