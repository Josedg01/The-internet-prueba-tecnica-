import InputsPage from "../../support/pageObjects/inputsPage";

const inputspage = new InputsPage;

const positiveNumber = Math.floor(Math.random() * 10000000000000000000);
const negativeNumber = Math.floor(Math.random() * -10000000000000000000);
const RandExp = require('randexp');
const rgx = /([^eA-Z0-9]{1})/
const randomLetter = new RandExp(rgx).gen();
const rgx1 = /([e])/
const letterE = new RandExp(rgx1).gen();

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

    it("inputing letters that are not the letter e", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(randomLetter);
    });

    it("inputing the letter 'e' more than once", () => {
        inputspage.inputBox().click();
        inputspage.inputBox().should("have.focus");
        inputspage.inputBox().type(letterE);
    });

    // it()
})