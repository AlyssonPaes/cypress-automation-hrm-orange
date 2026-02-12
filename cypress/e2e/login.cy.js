import userData from '../fixtures/users/user-date.js'

describe('Orange HRM Tests', () => {

  //Objeto de seletores para facilitar a alteração dos campos (get) que se repetem
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    buttonField: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    //sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text"
  }
        
  //cenário de sucesso
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.buttonField).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // outro jeito de garantir a url correta 
    //cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //cy.get(selectorList.dashboardGrid).contains('Dashboard')
  })

  //cenário de falha
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.buttonField).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})  