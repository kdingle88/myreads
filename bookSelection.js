const inquirer = require("inquirer");

const bookSelection = (query, bookItemList) => {
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
        const item = new Book(id, title, authors, publisher);

        let readingList = [];

        // read file and convert to JSON
        readingList = JSON.parse(fs.readFileSync("readingList.json"));
        let index = readingList.findIndex(x => x.id === id);

        // If book doesnt exist add it to list
        if (index === -1) {
          readingList.push({ id, title, authors, publisher });
          console.log("Book Added!");
          console.log("-----------");
          console.log(readingList);
        } else {
          console.log("Book Already Exists");
        }

        fs.writeFileSync("readingList.json", JSON.stringify(readingList));

        // item.saveToList();
      } catch (error) {
        console.log(error);
      }
    });
};

module.exports = bookSelection;
