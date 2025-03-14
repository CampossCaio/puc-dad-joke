describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/search");
    cy.intercept("joke", { fixture: "jokes/list.json" }).as("getJokes");
    cy.intercept("joke?*", { fixture: "jokes/searchedList.json" }).as(
      "getJokes"
    );
  });

  it("visits the Search Page", () => {
    cy.url().should("include", "/search");
  });

  it("shows the  Joke list", () => {
    expect(cy.contains("5 jokes found"));
    cy.getBySel("joke").should("have.length", 5);
  });

  it("allows to copy jokes to clipboard", () => {
    cy.getBySel("joke")
      .first()
      .get("button")
      .contains("Copy")
      .realClick()
      .should("contain.text", "Copied");
  });

  it("allows to search for a specific joke", () => {
    cy.get("input[type=text").type("why");

    cy.get("button").contains("Search").realClick();

    cy.wait("@getJokes");

    expect(cy.contains("2 jokes found"));

    cy.getBySel("joke").should("have.length", 2);
  });
});
