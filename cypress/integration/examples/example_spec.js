describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Navigate to LQ contributor info', () => {
    cy.get('#vid-container > div.cont_mobile_nav > div.menu-button > a > i').click()
    cy.contains('Contributors').click()
    cy.url().should('include', 'contributors/')

    // Access contributor
    cy.get('#vid-container > div.container.container_up > div > div.col-md-9.page-content > table > tbody > tr:nth-child(3) > td:nth-child(1) > h4 > a').click()
    cy.url().should('include', 'contributors/joli/')
  })

  it('Navigate to Book Lists category', () => {
    cy.get('#vid-container > div.cont_mobile_nav > div.menu-button > a > i').click()
    cy.contains('Categories').click()
    cy.get('#menu-item-1202').click()
    cy.url().should('include', 'category/book-lists')
    cy.contains('Book Lists')
  })

  it('Search for a review', () => {
    cy.get('#vid-container > div.cont_mobile_nav > div.search-button > a > i').click()
    cy.get('input.search-field').type('funny').should('have.value', 'funny').type('{enter}')
    cy.get('.title_category').should('have.text', 'Search Results for: "funny  "')
  })
})
