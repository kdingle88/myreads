const BookSearchList = require("./BookSearchList");
const keys = require("./keys");

const key = keys.APIKEY;

const query = "harry";

const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`;

const bookSearch = new BookSearchList(5, URL);
