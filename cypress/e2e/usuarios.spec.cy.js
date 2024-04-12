describe('Usuarios', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user'), Cypress.env('pass'));
  });

  it('Cargar detalles de usario en formulario', async () => {
    let username;

    await cy
      .get('.dx-datagrid')
      .find('.dx-row')
      .should('have.length.greaterThan', 0)
      .get('[aria-rowindex="1"] a')
      .click()
      .then(($e) => {
        username = $e.text().trim();
      })

    cy.log(username);

    cy.get('input[name="nombreUsuario"]')
      .should('have.value', username);


  });
});