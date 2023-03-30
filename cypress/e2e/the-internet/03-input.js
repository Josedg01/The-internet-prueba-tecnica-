import InputsPage from "../../support/pageObjects/inputsPage";

const inputspage = new InputsPage;

const positiveNumber = Math.floor(Math.random() * 10000000000000000000);
const negativeNumber = Math.floor(Math.random() * -10000000000000000000);
const RandExp = require('randexp');
const rgxLetters = /([^A-Z0-9]{1})/
const randomLetter = new RandExp(rgxLetters).gen();
const rgxScientificNotation = /([-]?[1-9][e][+][1-9])/
const scientificNotation = new RandExp(rgxScientificNotation).gen();


describe("testing the input page", () => {


    beforeEach(function(){
        cy.openInputsPage();
    });

    it("inputting positive number", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(positiveNumber);
    });

    it("inputting negative number", () => {
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

     it("changing from normal number to scientific notation", () =>{
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(positiveNumber);
        inputspage.inputBox().type("{upArrow}");
     })

     it("changing from scientific notation to normal number ", () =>{
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(scientificNotation);
        inputspage.inputBox().type("{upArrow}");
     })
})