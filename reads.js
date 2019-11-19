const BookSearchList = require("./BookSearchList");
const CommandQueryUrl = require("./CommandQueryUrl");
const keys = require("./keys");

const key = keys.APIKEY;

if (process.argv.length === 3) {
  function buildQuery() {
    const querySearch = process.argv[2];

    const queryString = querySearch.toLowerCase().replace(/\s+/g, "+");
    return queryString;
  }

  const query = buildQuery();

  // Generate Google Query URL
  const googleCommandQuery = new CommandQueryUrl("Google_Books", query, key);

  const url = googleCommandQuery.generateUrl();

  const bookSearch = new BookSearchList(5, url);

  bookSearch.getBookList().then(list => console.log(list));
}

if (process.argv[2] === "my" && process.argv[3] === "reading list") {
  function viewMyList() {
    return "This is your Reading List";
  }

  console.log(viewMyList());
}
