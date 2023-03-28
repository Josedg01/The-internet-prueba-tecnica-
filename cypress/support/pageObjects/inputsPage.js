class InputsPage {

    inputBox() {
        return cy.get("input")
    }

    pageTitle(){
        return cy.get("h3");
    }


}

const RandExp = require('randexp');
const rgx = /([e]{1})/
const random = new RandExp(rgx).gen();
console.log(random);

export default InputsPage;

/^[1]?[-\s\.]?(\(\d{3}\)|\d{3})[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im