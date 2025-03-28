import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import * as pages from "../pageObjects/index"

Given('I navigate to the login page', function() {
    pages.signUpPage.goTo(Cypress.env('url') + "/customer/account/login/")
})

When('I login to the application with created account', function ()  {
    pages.loginPage.login()
})

When('I should be logged in successfully',function(){
    pages.loginPage.pageValidation()
})




