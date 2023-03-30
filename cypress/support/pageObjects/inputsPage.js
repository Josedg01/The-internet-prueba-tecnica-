class InputsPage {

    inputBox() {
        return cy.get("input")
    }

    pageTitle(){
        return cy.get("h3");
    }


}

export default InputsPage;