class Dashboard {
    //confirmação da tela de dashboard
    confirmDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }
}

export default new Dashboard();