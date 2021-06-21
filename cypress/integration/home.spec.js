import { wait } from "@testing-library/react"

describe('Home component', ()=>{
    it('should show some newsCards', ()=>{
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="test-newscard"]')
        .should('have.class','newsCard')
    })

    it('should change pin toggle when clicked on', ()=>{
        let card = cy.get('[data-testid="test-newscard"]:first')
        .click()
        cy.get('img[alt="a pin to save article"]').should('have.class', 'Pinned')
    })

    it('should also change toggle back to unclicked when clicked on again',()=>{
        let card = cy.get('[data-testid="test-newscard"]:first')
        card.click()
        card.within(()=>{
            cy.get("img").should('have.class', 'notPinned')
        })
    })
})
