import HoversPage from "../../support/pageObjects/hoversPage";

const hoverspage = new HoversPage;


describe("testing hovers page", () =>{

    beforeEach(function() {
        cy.openHoversPage();
        cy.changeViewport(Cypress.env("viewport"));
    });

    it("hover over user 1", () => {
        hoverspage.firstImage().realHover("mouseover");
        hoverspage.firstUserCaption().should("be.visible");
        hoverspage.firstProfile().click();
        cy.url().should("include", "users/1");
        
    });

    it("hover over user 2", () => {
        hoverspage.secondImage().realHover("mouseover");
        hoverspage.secondUserCaption().should("be.visible");
        hoverspage.secondProfile().click();
        cy.url().should("include", "users/2");
    });

    it("hover over user 3", () => {
        hoverspage.thirdImage().realHover("mouseover");
        hoverspage.thirdUserCaption().should("be.visible");
        hoverspage.thirdProfile().click();
        cy.url().should("include", "users/3");
    });

})