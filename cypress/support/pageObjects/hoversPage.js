class HoversPage {

    pageTitle() {
        return cy.get("h3");
    }

    firstImage(){
        return cy.get("div.figure:nth-child(3) > img:nth-child(1)");
    }
    secondImage(){
        return cy.get("div.figure:nth-child(4) > img:nth-child(1)");
    }

    thirdImage(){
        return cy.get("div.figure:nth-child(5) > img:nth-child(1)");
    }

    

}

export default HoversPage;