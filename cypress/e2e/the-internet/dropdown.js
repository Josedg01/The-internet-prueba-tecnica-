import DropdownPage from "../../support/pageObjects/dropdownPage";

const dropdownPage = new DropdownPage;


describe("Testing dropdown page", () =>{


    beforeEach(function(){

        cy.openDropdownPage();
    });

    it("Selecting first value", ()=> {

        dropdownPage.dropdown().select(1).should("have.value", "1");
    });

    it("Selecting second value", ()=> {

        dropdownPage.dropdown().select(2).should("have.value", "2");

    })



})