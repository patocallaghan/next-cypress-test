describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("/");

    cy.contains("Home");

    cy.findByTestId("about").click();
    cy.contains("About us");

    cy.findByTestId("home").click();
    cy.contains("Home");
  });
});
