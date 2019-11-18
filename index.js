const BookSearchList = require("./BookSearchList");
const CommandQueryUrl = require("./CommandQueryUrl");
const keys = require("./keys");

const key = keys.APIKEY;

const query = "harry potter";

// Generate Google Query URL: Params are api name, query, api key.
const googleCommandQuery = new CommandQueryUrl(
  "Google_Books",
  query,
  keys.APIKEY
);

const url = googleCommandQuery.generateUrl();

const bookSearch = new BookSearchList(5, url);

bookSearch.getBookList().then(list => console.log(list));
