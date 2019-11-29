const BookSearchList = require("./BookSearchList");
const CommandQueryUrl = require("./CommandQueryUrl");
const buildQuery = require("./buildQuery");
const bookItems = require("./bookItems");
const bookSelection = require("./bookSelection");
const viewMyList = require("./viewMyList");
require("dotenv").config();

// Conditional for command line search arguements
if (process.argv.length === 3) {
  const key = process.env.GOOGLE_BOOKS_API_KEY;

  // check for key before proceeding
  if (!key) {
    return console.error(
      `
      Api key not set. Please set your Google books api key in .env file in order to proceed. 
  
      For further detailed instructions, check out the myReads documentation here: https://github.com/kdingle88/myreads
  
  `
    );
  }

  // Get query param from command args
  const query = buildQuery();

  // Generate Google Query URL
  const googleCommandQuery = new CommandQueryUrl("Google_Books", query, key);

  const url = googleCommandQuery.generateUrl();

  // Book list instance from search
  const bookSearch = new BookSearchList(5, url);

  bookSearch.getBookList().then(list => {
    try {
      const bookItemList = bookItems(list);

      bookSelection(bookItemList);
    } catch (e) {
      console.error("COULD NOT GET LIST", e);
    }
  });
}

// Conditional Command to generate reading list
if (process.argv[2] === "my" && process.argv[3] === "reading list") {
  viewMyList("readingList.json");
}
