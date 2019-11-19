//Returns Url for query

class CommandQueryUrl {
  constructor(api, query, key) {
    this.api = api;
    this.key = key;
    this.query = query;
  }

  generateUrl() {
    try {
      switch (this.api) {
        case "Google_Books":
          const URL = `https://www.googleapis.com/books/v1/volumes?q=${this.query}&key=${this.key}`;
          return URL;

        default:
          console.log("Enter a valid API Name");
      }
    } catch (e) {
      console.error("ENTER VALID DETIALS", e);
    }
  }
}

module.exports = CommandQueryUrl;
