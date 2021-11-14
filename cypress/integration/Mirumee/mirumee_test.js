context('Add shoes to basket', () => {
    beforeEach(() => {
      cy.visit('https://demo.saleor.io/')
    })
        it('going to shoes page', () => {
        cy.trigger('.main-menu__left')
        .should('have.value', 'GROCERIES')
      })
