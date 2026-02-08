describe('Orange HRM Tests', () => {

  //Objeto de seletores para facilitar a alteração dos campos que se repetem
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    buttonField: ".oxd-button",
    wrongCredentialAlert: ".oxd-alert",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text"
  }
        
  //cenário de sucesso
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.buttonField).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // outro jeito de garantir a url correta 
    // cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

  //cenário de falha
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('wrong-user')
    cy.get(selectorList.passwordField).type('wrong-sauce')
    cy.get(selectorList.buttonField).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})  