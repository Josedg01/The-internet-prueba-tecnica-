import LoginPage from "./pageObjects/loginPage";
import SecurePage from "./pageObjects/securePage";

const loginpage = new LoginPage();
const securepage = new SecurePage();
const presetViewportList = ["ipad-2", "ipad-mini", "iphone-3", "iphone-4", "iphone-5", "iphone-6", "iphone-6+", "iphone-7", "iphone-8", "iphone-x", "iphone-xr", "iphone-se2", "macbook-11", "macbook-13", "macbook-15", "macbook-16", "samsung-note9", "samsung-s10"]

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
  loginpage.userNameInput().should("be.visible");
  loginpage.passwordInput().should("be.visible");
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

Cypress.Commands.add("changeViewport", (preset) => {

  if(Array.isArray(preset) === true){
    cy.viewport(preset[0], preset[1]);
  }else if (typeof preset === "string" && preset !== ""){
    presetViewportList.forEach(dimension => {
      if(dimension ===preset){
        cy.viewport(preset);
      }
    });
    //cy.log("The value of viewport should be a string viewport preset, an array with the width and heigth values or an object");
  }else if (typeof preset === 'object' &&
  !Array.isArray(preset) &&
  preset !== null){
    cy.viewport(Object.values(preset)[0], Object.values(preset)[1]);
  }else if(preset === "" || preset === null){
    cy.log("using default viewport");
  }else{
    cy.log("The value of viewport should be a string viewport preset, an array with the width and heigth values or an object");
  }
  
});
