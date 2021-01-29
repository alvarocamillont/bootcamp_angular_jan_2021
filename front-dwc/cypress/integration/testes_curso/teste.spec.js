/// <reference types="cypress" />

context("A aplicação do curso", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  // https://on.cypress.io/interacting-with-elements

  it("deve fazer o login", () => {

    cy.get(".action-email")
      .type("fake@email.com {enter}")

    
    cy.get(".action-disabled")
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");
  });
});
