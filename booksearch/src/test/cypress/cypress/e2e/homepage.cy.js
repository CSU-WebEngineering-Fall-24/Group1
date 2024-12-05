describe("test home page", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8084/");
    cy.get(".navbar-brand").contains("Navbar", { matchCase: false });
  });

  it("random book verified", () => {
    cy.get(".nav-item").contains("Home").click();
    cy.get("button").contains("Get Random Book").click();
    cy.get("h1").contains("Book");
  });

  it("book search verified", () => {
    cy.get(".nav-item").contains("Book Search").click();
  });

  it("should toggle radio buttons", () => {
    cy.get(".nav-item").contains("Book Search").click();
    cy.get("input#author").click().should("be.checked");
    cy.get("input#title").should("not.be.checked");
  });

  it("should perform a search by author", () => {
    cy.get(".nav-item").contains("Book Search").click();
    cy.get("input#author").click();
    cy.get("input[type='text']")
      .clear() 
      .type("J.K. Rowling")
      .should("have.value", "J.K. Rowling")
  });

  it("about us verified", () => {
    cy.get(".nav-item").contains("About Us").click();
  });
});
