describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /hello world/i }).should('exist');
    cy.findByRole('article').should('exist');
    cy.findByAltText('myImage').should('exist');
  });
});
