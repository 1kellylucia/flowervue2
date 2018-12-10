describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Your online flower store!')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find('[data-test=flowerbtn]')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Flowers')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Add Flower')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About Us')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact Us')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('[data-test=flowerbtn]').click()
      cy.url().should('include', '/addflowers')
      cy.get('.navbar').contains('Manage').click()
      cy.url().should('include', '/flowers')
      // etc
    })
  })
})
