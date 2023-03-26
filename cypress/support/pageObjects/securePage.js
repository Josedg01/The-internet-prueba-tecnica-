class SecurePage {

    flashAlert () {
        return cy.get("#flash");
    }

    btnLogout () {
        return cy.get("a[href='/logout']")
    }
}

export default SecurePage;