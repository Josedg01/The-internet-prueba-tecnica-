import LoginPage from "../../support/pageObjects/loginPage";
import {randPassword, randUserName } from "@ngneat/falso";


const loginpage = new LoginPage();

const fakeUser = randUserName();
const fakePassword = randPassword();

describe("Testing login page", () => {

    beforeEach(function(){

        switch(Cypress.currentTest.title) {
            case "Haciendo login":
                cy.changeViewport(Cypress.env("viewport"));
                break;
            case "Haciendo logout":
                cy.changeViewport(Cypress.env("viewport"));
                break;
            default:
                cy.changeViewport(Cypress.env("viewport"));
                cy.openLoginPage();
                break;
        }
    });

    it("Haciendo login", () => {
        cy.login();
    });

    it("Haciendo logout", () => {
        cy.login();
        cy.logout();
    })

    it("Login without credencials", () => {
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your username is invalid!");
    });

    it("Login with invalid username", () => {
        loginpage.userNameInput().type(fakeUser);
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your username is invalid!");
    });

    it("Login with invalid password", () => {
        loginpage.userNameInput().type(Cypress.env("USER_NAME"));
        loginpage.passwordInput().type(fakePassword);
        loginpage.loginButton().click();
        loginpage.flashAlert().should("be.visible");
        loginpage.flashAlert().should("contains.text", "Your password is invalid!");
    });

})
