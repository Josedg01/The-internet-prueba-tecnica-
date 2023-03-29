import InputsPage from "../../support/pageObjects/inputsPage";

const inputspage = new InputsPage;

const positiveNumber = Math.floor(Math.random() * 10000000000000000000);
const negativeNumber = Math.floor(Math.random() * -10000000000000000000);
const RandExp = require('randexp');
const rgx = /([^eA-Z0-9]{1})/
const randomLetter = new RandExp(rgx).gen();
const rgx1 = /([-]?[1-9][e][+][1-9])/
const scientificNotation = new RandExp(rgx1).gen();


describe("testing the input page", () => {


    beforeEach(function(){
        cy.openInputsPage();
    });

    it("inputing positive number", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(positiveNumber);
    });

    it("inputing negative number", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(negativeNumber);
    });

    it("should not input letters", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(randomLetter);
        inputspage.inputBox().should("have.value", "");
    });

    it("increasing the input using the upArrow key", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type("{upArrow}");
    });

    it("decreasing the input using the downArrow key", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type("{downArrow}");
    });

     it("chaging from normal number to scientific notation", () =>{
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(positiveNumber);
        inputspage.inputBox().type("{upArrow}");
     })

     it("chaging from scientific notation to normal number ", () =>{
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(scientificNotation);
        inputspage.inputBox().type("{upArrow}");
     })
})