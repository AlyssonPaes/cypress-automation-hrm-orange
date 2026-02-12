import { elements as el, userInputFail, userInputSucess } from "./elements";

class Login {
    visitarPagina() {
        //BaseURL configurada no cypress.config.js
        cy.visit('/auth/login')
    }

    loginSucess() {
        cy.get(el.usernameField).type(userInputSucess.usernameField)
        cy.get(el.passwordField).type(userInputSucess.passwordField)
        cy.get(el.buttonField).click()
    }

    loginFail() {
        cy.get(el.usernameField).type(userInputFail.usernameField)
        cy.get(el.passwordField).type(userInputFail.passwordField)
        cy.get(el.buttonField).click()
        //Assert
        cy.get(el.wrongCredentialAlert)
    }
}

export default new Login();
