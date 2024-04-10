describe('Prueba de inicio de sesión', () => {
  it('Inicia sesión con credenciales válidas', () => {
    cy.visit('http://mexcdb.nld.ei/seguridad-app');

    cy.get('.dx-placeholder[data-dx_placeholder="Usuario"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('nld-audomarog');

    cy.get('.dx-placeholder[data-dx_placeholder="Password"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('TU PASSWORD');

    cy.contains('.dx-button-content', 'Login')
      .click();

    cy.url().should('include', '/usuarios');
  });

  it('Inicia sesión con credenciales inválidas', () => {
    cy.visit('http://mexcdb.nld.ei/seguridad-app');

    cy.get('.dx-placeholder[data-dx_placeholder="Usuario"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('nld-audomarog');

    cy.get('.dx-placeholder[data-dx_placeholder="Password"]')
      .parent('.dx-texteditor-input-container')
      .find('.dx-texteditor-input')
      .type('INVALIDO');

    cy.contains('.dx-button-content', 'Login')
      .click();

    cy
      .get('.dx-toast-error')
      .should('contain', 'Username or password incorrect');
  });
});