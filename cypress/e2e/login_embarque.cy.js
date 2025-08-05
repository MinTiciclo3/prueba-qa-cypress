describe('Login y filtro Marítimo + Exportación, Importación y seleccioanr', () => {
  it('Login con PIN, filtra por Marítimo y luego Exportación', () => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=12b8140da2164226f7d1ab0626547985903b');

    // Ingresar PIN
    cy.get('#digit1').type('5');
    cy.get('#digit2').type('5');
    cy.get('#digit3').type('6');
    cy.get('#digit4').type('9');
    cy.get('button[type="submit"]').click();

    // Validar página cargada
    cy.contains('Reporte de Embarques', { timeout: 10000 }).should('be.visible');

    // Seleccionar Exportación
    cy.get('span')
      .contains('Exportación')
      .click({ force: true });

    // Validar que el botón Exportación esté activo
    cy.get('span.impo-expo-button-selected')
      .should('contain.text', 'Exportación');

    cy.get('object[data="/assets/svg/download.svg"]')
    .click({ force: true });

    cy.get('svg.breadcrumb__icon.feather-arrow-down-circle')
  .click({ force: true });

  cy.get('svg.feather.feather-arrow-down-circle.breadcrumb__icon')
  .click({ force: true });

      // Seleccionar Importación
      cy.get('span')
      .contains('Importación')
      .click({ force: true });

    // Validar que el botón Importación esté activo
    cy.get('span.impo-expo-button-selected')
      .should('contain.text', 'Importación');

    // Clic en filtro Marítimo
    cy.get('img[src="assets/svg/maritime.svg"]').parent('div').click({ force: true });

    cy.contains('a', 'Seleccionar').click({ force: true });

    cy.contains('label', 'Demurrage').click({ force: true });

    cy.contains('div.flex.items-center.cursor-pointer', 'Filtros').click({ force: true });

// Clic en el botón desplegable "Seleccionar" (solo el primero visible)
cy.get('div.select-menu > div.select-btn')
  .filter(':visible')
  .first()
  .click({ force: true });



});
});

      