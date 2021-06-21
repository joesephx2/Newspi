describe('Home component', ()=>{
    it('should show some newsCards', ()=>{
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="test-newscard"]')
        .should('have.class','newsCard')
    })
})
