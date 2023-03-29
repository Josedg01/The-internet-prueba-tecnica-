import HoversPage from "../../support/pageObjects/hoversPage";

const hoverspage = new HoversPage;


describe("testing hovers page", () =>{

    beforeEach(function() {
        cy.openHoversPage();

    });

    it("hover over user 1", () => {
        hoverspage.firstUser().realHover("mouse");
    });

})