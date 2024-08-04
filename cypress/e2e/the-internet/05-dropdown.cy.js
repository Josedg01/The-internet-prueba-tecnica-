import DropdownPage from "../../support/pageObjects/dropdownPage";

const dropdownPage = new DropdownPage;


describe("Testing dropdown page", () =>{


    beforeEach(function(){
        cy.changeViewport(Cypress.env("viewport"));
        cy.openDropdownPage();
    });

    it("Selecting first value", ()=> {
        dropdownPage.dropdown().should("contains.text", "Please select an option")
        dropdownPage.dropdown().select(1).should("have.value", "1");
        dropdownPage.dropdown().should("contains.text", "Option 1")
    });

    it("Selecting second value", ()=> {
        dropdownPage.dropdown().should("contains.text", "Please select an option")
        dropdownPage.dropdown().select(2).should("have.value", "2");
        dropdownPage.dropdown().should("contains.text", "Option 2")
    })

    it("Selecting first value then changing value to the second one", () =>{
        dropdownPage.dropdown().should("contains.text", "Please select an option")
        dropdownPage.dropdown().select(1).should("have.value", "1");
        dropdownPage.dropdown().should("contains.text", "Option 1")
        dropdownPage.dropdown().select(2).should("have.value", "2");
        dropdownPage.dropdown().should("contains.text", "Option 2")
    });



})