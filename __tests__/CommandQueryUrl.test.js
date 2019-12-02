const CommandQueryUrl = require("../CommandQueryUrl");
const buildQuery = require("../buildQuery");
require("dotenv").config();

const key = process.env.GOOGLE_BOOKS_API_KEY;

test("Build url string even with spaces between words in query", () => {
  const query = buildQuery("harry     potter");

  const googleCommandQuery = new CommandQueryUrl("Google_Books", query, key);

  expect(googleCommandQuery.generateUrl()).toEqual(
    `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${key}`
  );
});
