describe("Search page", () => {
  it("visits the app search page", () => {
    cy.visit("/search");
    cy.contains("div", "Your search results will be shown here");
  });
  it("finds movie records", () => {
    cy.visit("/search");
    cy.get('[data-cy="input"]').should("be.visible");
    cy.get('[data-cy="input"] input').type("dirty harry");
    cy.get('button[data-cy="submit"]').click();
    cy.get('[data-cy="result"]').should("exist");
    cy.get('[data-cy="result"]').should("have.length.greaterThan", 0);
  });

  it("has empty favorites list", () => {
    cy.visit("/search");
    cy.get('[data-cy="empty"]').should("exist");
  });

  it("adds and removes a movie to favorites", () => {
    cy.visit("/search");
    cy.get('[data-cy="input"]').should("be.visible");
    cy.get('[data-cy="input"] input').type("dirty harry");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="result"]').should("exist");
    cy.get('[data-cy="result"]').should("have.length.greaterThan", 0);
    cy.get('[data-cy="result"]')
      .first()
      .find('[data-cy="favourite-add"]')
      .click();
    cy.get('[data-cy="favourite"]').should("exist");
    cy.get('[data-cy="favourite"]').should("have.length", 1);
    cy.get('[data-cy="favourite"]')
      .first()
      .find('[data-cy="favourite-remove"]')
      .click();
    cy.get('[data-cy="favourite"]').should("not.exist");
  });
});
