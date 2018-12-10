describe("Donate page", () => {

  beforeEach(() => {
    cy.visit("/");
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click()
  });


    it("allows a flower to be edited", () => {

      cy.get('[id=flower_]').select('Sakura')
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
    cy.get('button[type=submit]').click();
    cy.contains('Thanks for your add flowers!').should('exist');

  });
  })
