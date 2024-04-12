describe('Prueba de inicio de sesión', () => {

  beforeEach(() => {
    cy.goToSite();
  });

  it('Inicia sesión con credenciales válidas', () => {
    cy.get('[data-dx_placeholder="Usuario"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type(Cypress.env('user'));

    cy.get('[data-dx_placeholder="Password"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type(Cypress.env('pass'));

    cy.contains('.dx-button-content', 'Login')
      .click();

    cy.url().should('include', '/usuarios');
  });

  it('Inicia sesión con credenciales inválidas', () => {
    cy.get('[data-dx_placeholder="Usuario"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('FAKE');

    cy.get('[data-dx_placeholder="Password"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('FAKE');

    cy.contains('.dx-button-content', 'Login')
      .click();

    cy.get('.dx-toast-message')
      .should('contain', 'Username or password incorrect');
  });
});