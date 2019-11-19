const bookItems = list => {
  const bookItemList = list.map(book => {
    return {
      name: `Title: ${book.title} | Author(s): ${book.authors} | Publisher: ${book.publisher}`,
      value: {
        id: book.id,
        title: book.title,
        authors: book.authors,
        publisher: book.publisher
      }
    };
  });
  return bookItemList;
};

module.exports = bookItems;
