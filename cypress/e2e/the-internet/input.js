import InputsPage from "../../support/pageObjects/inputsPage";

const inputspage = new InputsPage;

const digit = Math.floor(Math.random() * 100000000000000000000000000000000000);

describe("testing the input page", () => {


    // beforeEach(function(){
    //     cy.openInputsPage();
    // });

    it("Entrando un numero", () => {
        cy.openInputsPage();
        inputspage.inputBox().type(digit);
    })
})