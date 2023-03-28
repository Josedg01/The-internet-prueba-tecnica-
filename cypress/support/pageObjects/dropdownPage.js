class dropdownPage {

    pageTitle(){
        return cy.get("h3");
    }

    dropdown(){
        return cy.get("#dropdown");
    }



}

export default dropdownPage;