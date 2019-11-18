const CommandQueryUrl = require("./CommandQueryUrl");
const keys = require("./keys");

test("Build url string even with spaces between words in query", () => {
  const query = "harry   Potter";

  // Generate Google Query URL: Params are api name, query, api key.
  const googleCommandQuery = new CommandQueryUrl(
    "Google_Books",
    query,
    keys.APIKEY
  );

  expect(googleCommandQuery.generateUrl()).toEqual(
    `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${keys.APIKEY}`
  );
});
