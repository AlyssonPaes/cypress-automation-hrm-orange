import { elements as el, userInputFail, userInputSucess } from "./elements";

class Login {
    visitarPagina() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginSucess() {
        cy.get(el.usernameField).type(userInputSucess.usernameField)
        cy.get(el.passwordField).type(userInputSucess.passwordField)
        cy.get(el.buttonField).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }

    loginFail() {
        cy.get(el.usernameField).type(userInputFail.usernameField)
        cy.get(el.passwordField).type(userInputFail.passwordField)
        cy.get(el.buttonField).click()
        cy.get(el.wrongCredentialAlert)
    }
}

export default new Login();
