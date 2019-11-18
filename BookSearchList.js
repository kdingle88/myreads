const axios = require("axios");

// return set number of array objects via API
class BookSearchList {
  constructor(num, url) {
    this.num = num;
    this.url = url;
  }

  async getBookList() {
    try {
      const response = await axios.get(this.url);
      const data = response.data.items;

      const list = [];

      for (let i = 0; i < this.num; i++) {
        list.push({
          id: data[i].id,
          title: data[i].volumeInfo.title,
          authors: data[i].volumeInfo.authors,
          publisher: data[i].volumeInfo.publisher
        });
      }
      return list;
    } catch (e) {
      console.error("Could not fetch Book List", e);
    }
  }
}

module.exports = BookSearchList;
