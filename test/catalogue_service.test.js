const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });
    test("returns false if the book does not exist", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Chronicles of Narnia"
        )
      ).toBe(false);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns books which start with the given letter", () => {
      expect(
        catalogueService.countBooksByFirstLetter(
          "W"
        )
      ).toBe(2);
    });
  });
  describe("catalogueService.getQuantity", () => {
    test("returns the stock number", () => {
      expect(
        catalogueService.getQuantity(
          "The Catcher in the Rye"
        )
      ).toBe(10);
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the books by a specific author", () => {
      expect(
        catalogueService.getBooksByAuthor(
          "Robert Bolaño"
        )
      ).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]
      );
    });
  });
  describe("catalogueService.checkQuantity", () => {
    test("returns true if in stock or false if not", () => {
      expect(
        catalogueService.checkQuantity(
          "By Night In Chile", 4
        )
      ).toBe(true);
    });
    test("returns true if in stock or false if not", () => {
      expect(
        catalogueService.checkQuantity(
          "By Night In Chile", 100
        )
      ).toBe(false);
  });
});
});
