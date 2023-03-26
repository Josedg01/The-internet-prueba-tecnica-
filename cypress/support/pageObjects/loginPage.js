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
}

export default LoginPage;