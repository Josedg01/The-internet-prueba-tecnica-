class HoversPage {

    pageTitle() {
        return cy.get("h3");
    }

    firstImage(){
        return cy.get("div:nth-child(3) > img");
    }

    firstUserCaption(){
        return cy.get("div:nth-child(3) > div > h5");
    }

    firstProfile(){
        return cy.get("div:nth-child(3) > div > a")
    }

    secondImage(){
        return cy.get("div:nth-child(4) > img");
    }

    secondUserCaption(){
        return cy.get("div:nth-child(4) > div > h5");
    }

    secondProfile(){
        return cy.get("div:nth-child(4) > div > a")
    }

    thirdImage(){
        return cy.get("div:nth-child(5) > img");
    }

    thirdUserCaption(){
        return cy.get("div:nth-child(5) > div > h5");
    }

    thirdProfile(){
        return cy.get("div:nth-child(5) > div > a")
    }

    

}

export default HoversPage;