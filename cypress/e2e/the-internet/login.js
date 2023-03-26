import LoginPage from "../../support/pageObjects/loginPage";
import SecurePage from "../../support/pageObjects/securePage";

const loginpage = new LoginPage();

describe("login", () => {

    it("Haciendo login", () => {
        cy.login();
    });

    it("Haciendo logout", () => {
        cy.login();
        cy.logout();
    })

})