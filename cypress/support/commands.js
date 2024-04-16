Cypress.Commands.add('register', () => {
    // Navegar para a URL base definida no arquivo cypress.json
    cy.visit('/');
    // Verificar se a página correta foi carregada pelo título da página
    cy.title().should('eq', 'Cadastro – English Stage');
    // Clicar no botão "Fazer inscrição" pelo atributo data-cy
    cy.get('[data-cy="button-btn-enroll"]').click();
});