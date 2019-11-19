const BookSearchList = require("./BookSearchList");
require("dotenv").config();

test("See if data is fetched & equal length provided", () => {
  const key = process.env.GOOGLE_BOOKS_API_KEY;
  const query = "harry";

  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`;

  const bookSearch = new BookSearchList(5, URL);

  return bookSearch.getBookList().then(list => {
    expect(list).toHaveLength(5);
  });
});
