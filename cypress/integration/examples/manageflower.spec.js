
describe("Manage Flowers page", () => {

  beforeEach(() => {
    // Delete all flowers in the API's datastore
    /*cy.request('http://localhost:8080/')
      .its('body')
      .then( (flowers) => {
        flowers.forEach( (element) => {
          cy.request('DELETE',
            'http://localhost:8080/' + element._id)
        });
      })
    // Populate API's datastore
    cy.fixture('flowers')
      .then((flowers) => {
        flowers.forEach((flower) => {
          cy.request('POST',
            'http://localhost:8080/', flower )
        })
      })*/

    cy.visit("/");
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(2)').click()

  });
  it("allows a flower to be liked", () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(6)').click()
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(4)').contains('1')
  });
  it("allows a flower to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 10)
  });
  it("allows a flower to be edited", () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(7)').click()
    // Click confirmation button

    cy.get('[id=flower_]').select('Sakura')
    cy.get('input[data-test=amount]').type('{del}{selectall}{backspace}')
      .type(888);
    cy.get('input[data-test=prize]').type('{del}{selectall}{backspace}')
      .type(2);
    cy.contains('Thanks for your add flowers!').should('not.exist');
    cy.get('button[type=submit]').click();
    cy.contains('Thanks for your add flowers!').should('exist');
    cy.get('a[data-test=BACK]').click();
    cy.get('tbody').find('tr').should('have.length', 10)
  });

  it("shows error messages for incomplete form fields", () => {
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(7)').click()
    cy.get('[id=flower_]').select('Sakura')
    cy.get('input[data-test=amount]').type('{del}{selectall}{backspace}')
    .type(9999);
    cy.get('input[data-test=prize]').type('{del}{selectall}{backspace}')
    .type(200);
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
