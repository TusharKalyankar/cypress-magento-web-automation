import testData from '../../fixtures/example.json'
import * as pages from '../pageObjects/index'


class LoginPage {

    //css paths

    get loginEmailAddress() { return cy.get("#email") }
    get loginPassword() { return cy.get(".login-container #pass") }
    get signInButton() { return cy.get(".primary .login") }

    //methods


    login() {
        cy.readFile('cypress/fixtures/signUpEmail.json').then((userData) => {
            pages.loginPage.loginEmailAddress.type(userData.email);
        });

        pages.loginPage.loginPassword.type(testData.password)
        cy.contains('span', 'Sign In').click()



    }

    pageValidation() {
        cy.contains("Welcome, ").should("be.visible");
        cy.contains('strong', "My Account").should("be.visible");
    }

}
export default new LoginPage();