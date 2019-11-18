//Returns Url for query

class CommandQueryUrl {
  constructor(api, query, key) {
    this.api = api;
    this.key = key;
    this.query = query.toLowerCase().replace(/\s+/g, "+");
  }

  generateUrl() {
    try {
      switch (this.api) {
        case "Google_Books":
          //lower case query
          //replace spaces with +
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
