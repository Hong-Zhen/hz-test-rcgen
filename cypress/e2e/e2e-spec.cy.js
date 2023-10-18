// npx cypress run 
// 6
beforeEach(() => {
  cy.visit('/')
  cy.viewport('macbook-16')
  cy.reload(true)
  cy.get('article.modal').not('.active-model')
})

afterEach(() => {
  cy.reload(true)
})

// describe("Confirm fail", () => {
//   it ('Failling', () => {
//     cy.get("h1").contains("itchen")
//   })
// })

describe("Navigate to Menu Page and back to Home Page", () => {
  it ('To Menu Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(2)').contains("Menu").click()
    cy.url().should('include', '/menu')
    
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

// Reciepe 

describe("Navigate to About Page and back to Home Page", () => {
  it ('To About Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(4)').contains("About").click()
    cy.url().should('include', '/about')

    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

describe("Navigate to Contact Page and back to Home Page", () => {
  it ('To Contact Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(5)').contains("Contact").click()
    cy.url().should('include', '/contact')

    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

describe("Open login page", () => {
  it('Open and close login page', () => {
    cy.get('div.passive-button-style').contains("Log in").click()
    cy.get('button.close-modal-btn').click()
  })
})

describe("Last test case", () => {
  it('Open and close login page', () => {
    cy.get('div.passive-button-style').contains("Log in").click()
    cy.get('button.close-modal-btn').click()
  })
})