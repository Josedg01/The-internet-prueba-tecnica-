class InputsPage {

    inputBox() {
        return cy.get("input")
    }


}



export default InputsPage;

/^[1]?[-\s\.]?(\(\d{3}\)|\d{3})[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im