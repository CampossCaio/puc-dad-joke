describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("joke/random", { fixture: "jokes/random.json" }).as(
      "getRandomJoke"
    );
  });

  it("visits the Home Page", () => {
    cy.url().should("include", "/");
  });

  it("starts with a random joke", () => {
    const randomJoke =
      "I got a new pen that can write under water. It can write other words too.";

    expect(cy.contains(randomJoke));
  });

  it("generate a new random joke", () => {
    cy.get("button").contains("New Joke").click();

    cy.wait("@getRandomJoke");
  });

  it("allows to copy the random joke", () => {
    cy.get("a").contains("Copy").realClick();
    cy.get("a").contains("Copied");
  });
});
