const BookSearchList = require("../BookSearchList");

test("See if data is fetched & equal length provided", () => {
  const bookSearch = new BookSearchList(5, URL);

  return bookSearch.getBookList().then(list => {
    expect(list).toHaveLength(5);
  });
});
