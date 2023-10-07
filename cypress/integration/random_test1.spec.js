describe("home page", () => {
    it("the h1 contains the correct text", () => {
      cy.visit(URL)
      cy.get("h1").contains("itchen")
    })
})
