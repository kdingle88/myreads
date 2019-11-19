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
          break;
        default:
          console.log("Enter a valid API Name");
      }
    } catch (error) {
      console.log(error);
      console.log("Enter Valid Details");
    }
  }
}

module.exports = CommandQueryUrl;
