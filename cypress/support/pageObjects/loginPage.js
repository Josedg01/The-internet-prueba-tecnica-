class LoginPage {

    userNameInput() {
        return cy.get("#username");
      }

    passwordInput(){
        return cy.get("#password");
    }

    loginButton(){
        return cy.get("button.radius");
    }

    flashAlert(){
        return cy.get("#flash")
    }

    pageTitle(){
        return cy.get("h2");
    }
}

export default LoginPage;