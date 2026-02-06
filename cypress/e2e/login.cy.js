describe('Orange HRM Tests', () => {
  //cenário de sucesso
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // outro jeito de garantir a url correta 
    // cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  //cenário de falha
  it.only('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('wrong-user')
    cy.get('[name="password"]').type('wrong-sauce')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  })
})  