const bookItems = require("../bookItems");

const bookList = [
  {
    id: "_ojXNuzgHRcC",
    title: "Flowers",
    authors: ["Vijaya Khisty Bodach"],
    publisher: "Fake Publisher"
  },
  {
    id: "xJNFDwAAQBAJ",
    title: "Hello Hello",
    authors: ["Brendan Wenzel"],
    publisher: "Chronicle Books"
  }
];

test("Expect bookItems to return an Array", () => {
  expect(Array.isArray(bookItems(bookList))).toBeTruthy();
});

test("Expect bookItems to return array with same length as input", () => {
  expect(bookItems(bookList).length).toEqual(bookList.length);
});
