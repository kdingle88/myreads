const inquirer = require("inquirer");

const Book = require("./Book");

const bookSelection = bookItemList => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: `
          Here are the results from your search

      Select book you would like to add to your reading list:
      
      `,
        name: "book",
        choices: bookItemList
      }
    ])
    .then(answers => {
      // This is what saveToList will do..passing in answers
      try {
        const { id, title, authors, publisher } = answers.book;
        const selectedBook = new Book(id, title, authors, publisher);

        selectedBook.saveToList();
      } catch (error) {
        console.log(error);
      }
    });
};

module.exports = bookSelection;
