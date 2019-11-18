const BookSearchList = require("./BookSearchList");
const keys = require("./keys");

test("See if data is fetched & equal length provided", () => {
  const key = keys.APIKEY;
  const query = "harry";

  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`;

  const bookSearch = new BookSearchList(5, URL);

  return bookSearch.getBookList().then(list => {
    expect(list).toHaveLength(5);
  });
});
