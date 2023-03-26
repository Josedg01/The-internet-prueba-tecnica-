import LoginPage from "../../support/pageObjects/loginPage";
import { randEmail, randAbbreviation } from "@ngneat/falso";


const loginpage = new LoginPage();

const fakeUser = randEmail();
const fakePassword = randAbbreviation();
const RandExp = require('randexp');
const rgx = /([A-Z]{2})([a-z]{5})(\d{6})[^a-zA-Z0-9]/
const random = new RandExp(rgx).gen();


describe("negative login", () => {

    beforeEach(function(){
        cy.openLoginPage();
    });

    it("Login without credencials", () => {
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your username is invalid!");
    });

    it("Login with invalid username", () => {
        loginpage.userNameInput().type(random);
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your username is invalid!");
    });

    it("Login with invalid password", () => {
        loginpage.userNameInput().type(Cypress.env("USER_NAME"));
        loginpage.passwordInput().type(random);
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your password is invalid!");
    });

})
