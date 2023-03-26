import LoginPage from "./pageObjects/loginPage";
import SecurePage from "./pageObjects/securePage";

const loginpage = new LoginPage();
const securepage = new SecurePage();

Cypress.Commands.add("openLoginPage", () => {
  cy.visit(Cypress.env("loginUrl"));
});

Cypress.Commands.add("openInputsPage", () => {
    cy.visit(Cypress.env("inputsUrl"));
});

Cypress.Commands.add("openHoversPage", () => {
    cy.visit(Cypress.env("hoversUrl"));
});

Cypress.Commands.add("openDropdownPage", () => {
    cy.visit(Cypress.env("dropdownUrl"));
});


Cypress.Commands.add("login", () => {
  cy.openLoginPage();
  loginpage.userNameInput().type(Cypress.env("USER_NAME"));
  loginpage.passwordInput().type(Cypress.env("PASSWORD"));
  loginpage.loginButton().click();
  securepage.flashAlert().should("contains.text", "You logged into a secure area!");
});


Cypress.Commands.add("logout", () => {
    cy.wait(600);
    securepage.btnLogout().click();
    loginpage.flashAlert().should("contains.text", "You logged out of the secure area!")
});