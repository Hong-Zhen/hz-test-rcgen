// npx cypress run 
// 1

beforeEach(() => {
  cy.visit('/')
  cy.viewport('macbook-16')
  cy.reload(true)
  cy.get('article.modal').not('.active-model')
})

afterEach(() => {
  cy.reload(true)
})

describe("Confirm fail444", () => {
  it ('Failling', () => {
    cy.get("h1").contains("itchen")
  })
})