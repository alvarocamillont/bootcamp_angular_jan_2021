/// <reference types="cypress" />

context("A aplicação do curso", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  // https://on.cypress.io/interacting-with-elements

  function login() {
    cy.get(
      ".po-page-login-info-field > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("admin");

    cy.get(
      ".po-page-login-field-size > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("admin");

    cy.get(".po-button").click();
  }

  it("deve fazer o login", () => {
    login();
    cy.url().should("eq", "http://localhost:4200/home");
  });

  it("deve incluir um cliente", () => {
    login();
    const id = (Math.floor(Math.random() * 10) + 1).toString();
    cy.visit("http://localhost:4200/home/clientes");
    cy.get(".po-page-list-actions > po-button > .po-button").click();
    cy.get(
      ".po-md-2 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type(id);
    cy.get(
      ".po-md-10 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("Alvaro");
    cy.get('[p-icon="po-icon-ok"] > .po-button').click();
  });
});
