import LoginPage from "../../support/pageObjects/loginPage";
import InputsPage from "../../support/pageObjects/inputsPage";
import HoversPage from "../../support/pageObjects/hoversPage";
import DropdownPage from "../../support/pageObjects/dropdownPage";


const loginPage = new LoginPage();
const inputsPage  = new InputsPage();
const hoversPage = new HoversPage();
const dropdownPage = new DropdownPage;


//Pruebas de humo
describe("Smoke tests", () => {

    beforeEach(function(){
        cy.changeViewport(Cypress.env("viewport"));
    });

    it("Validating in loginPage", () =>{

        cy.openLoginPage();
        cy.url().should("eq", Cypress.env("loginUrl"));
        loginPage.pageTitle().should("contains.text", "Login Page");
        loginPage.userNameInput().should("be.visible");
        loginPage.passwordInput().should("be.visible");
    });

    it("Validating in inputsPage", () => {

        cy.openInputsPage();
        cy.url().should("eq", Cypress.env("inputsUrl"));
        inputsPage.pageTitle().should("be.visible");
        inputsPage.inputBox().should("be.visible");
    });

    it("Validating in hoversPage", () => {

        cy.openHoversPage();
        cy.url().should("eq", Cypress.env("hoversUrl"));
        hoversPage.pageTitle().should("contains.text", "Hovers");
        hoversPage.firstImage().should("be.visible");
        hoversPage.secondImage().should("be.visible");
        hoversPage.thirdImage().should("be.visible");
    });

    it("Validating in dropdownPage", () => {

        cy.openDropdownPage();
        cy.url().should("eq", Cypress.env("dropdownUrl"));
        dropdownPage.pageTitle().should("contains.text", "Dropdown List");
        dropdownPage.dropdown().should("be.visible");
    });

   
})