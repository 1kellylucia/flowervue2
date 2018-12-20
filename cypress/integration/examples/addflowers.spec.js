describe("floweradd page", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click();
    cy.get('input[data-test=username]').type('admin@123.com');
    cy.get('input[data-test=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

    it("allows a flower to be edited", () => {
      cy.get('input[data-test=id]').type(100006);
      cy.get('[id=flower_]').select('Sakura');
      cy.get('input[data-test=amount]').type('{del}{selectall}{backspace}')
        .type(888);
      cy.get('input[data-test=prize]').type('{del}{selectall}{backspace}')
        .type(2);
      cy.contains('Thanks for your add flowers!').should('not.exist');
      cy.get('button[type=submit]').click();
      cy.contains('Thanks for your add flowers!').should('exist');
      cy.get('a[data-test=BACK]').click();
    });
  it("shows error messages for incomplete form fields", () => {
    cy.get('input[data-test=amount]').type('{del}{selectall}{backspace}')
    .type(0);
    cy.get('input[data-test=prize]').type('{del}{selectall}{backspace}')
    .type(0);
    cy.get('button[type=submit]').click();
    cy.contains('Please Fill in the Form Correctly.').should('exist');
    cy.get('.error').contains('Amount');
    cy.get('.error').contains('Prize');
    cy.get('input[data-test=amount]').type('{del}{selectall}{backspace}')
    cy.get('input[data-test=amount]').type(321);
    cy.get('input[data-test=prize]').type('{del}{selectall}{backspace}')
    cy.get('input[data-test=prize]').type(2);
    cy.get('input[data-test=id]').type(100006);
    cy.get('[id=flower_]').select('Sakura');
    cy.get('button[type=submit]').click();

  });
  })

