describe('Logging functionality', () => {
    beforeEach(() => {
    cy.visit('https://demo.saleor.io/')       
    cy.get('[data-test=desktopMenuLoginOverlayLink] > :nth-child(1) ').click()
  })
  it('Check signin btn', () => {   
    cy.contains('Sign in').should('be.visible')
   })
   
   it('Check signin in with valid credentials', () => {   
    cy.get('button[type="submit"]').click() 
    cy.expect('.main-menu__user--active').to.exist
   })
 
 })