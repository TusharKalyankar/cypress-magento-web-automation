import testData from "../../fixtures/example.json"
import { generateRandomEmail } from '../utils';
import * as pages from '../pageObjects/index'

class signUpPage {

    //css paths

    get firstName() { return cy.get("#firstname") }
    get lastName() { return cy.get("#lastname") }
    get emailAddress() { return cy.get("#email_address") }
    get password() { return cy.get("#password") }
    get confirmPassword() { return cy.get("#password-confirmation") }
    get createButton() { return cy.get("button[title='Create an Account']") }
    get requiredFieldError() { return cy.get("div[ class='mage-error']") }

    //methods

    goTo(url) {
        cy.visit(url)
    }

    fillSignupForm() {

        const email = generateRandomEmail(); // Generate email


        pages.signUpPage.firstName.type(testData.firstName);
        pages.signUpPage.lastName.type(testData.lastName);
        pages.signUpPage.emailAddress.type(email);
        cy.writeFile('cypress/fixtures/signUpEmail.json', { email: email });
        pages.signUpPage.password.type(testData.password);
        pages.signUpPage.confirmPassword.type(testData.confirmPassword);
    }

    submitForm() {
        this.createButton.click();
    }

    verifySuccess() {
        cy.contains("Thank you for registering").should("be.visible");
    }

    enterDetailsWithExistingEmail() {
        pages.signUpPage.firstName.type(testData.firstName);
        pages.signUpPage.lastName.type(testData.lastName);
        pages.signUpPage.emailAddress.type(testData.existingEmail);
        pages.signUpPage.password.type(testData.password);
        pages.signUpPage.confirmPassword.type(testData.confirmPassword);
    }

    enterInvalidEmail() {
        pages.signUpPage.emailAddress.type(testData.invalidEmail);
    }

    enterInvalidPassword() {
        pages.signUpPage.password.type(testData.invalidPassword);
    }

    enterMismatchedPasswords(pass1, pass2) {
        pages.signUpPage.password.type(pass1);
        pages.signUpPage.confirmPassword.type(pass2);
    }

    leaveAllFieldsEmpty() {
        pages.signUpPage.firstName.clear()
        pages.signUpPage.lastName.clear()
        pages.signUpPage.emailAddress.clear()
        pages.signUpPage.password.clear()
        pages.signUpPage.confirmPassword.clear()
    }


    verifyErrorMessage(message) {
        cy.contains(message).should('be.visible');
    }

    verifyFieldErrorMessages(message) {
        pages.signUpPage.requiredFieldError.each(($el) => {
            cy.wrap($el).should('have.text', message);
        });
    }

    verifyUIElements() {
        pages.signUpPage.firstName.should('be.visible');
        pages.signUpPage.lastName.should('be.visible');
        pages.signUpPage.emailAddress.should('be.visible');
        pages.signUpPage.password.should('be.visible');
        pages.signUpPage.confirmPassword.should('be.visible');
        pages.signUpPage.createButton.should('be.visible');
    }

}
export default new signUpPage();