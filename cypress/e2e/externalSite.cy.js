describe('External Site Test', () => {
  it('should load the homepage', () => {
    cy.visit('https://www.sfu.ca');
    cy.title().should('include', 'SFU');
  });
});
