const fs = require("fs");

// Manages Book CRUD operations

class Book {
  constructor(id, title, authors, publisher, list = "readingList.json") {
    this.id = id;
    this.authors = authors;
    this.title = title;
    this.publisher = publisher;
    this.list = list;
  }

  saveToList() {
    const book = {
      id: this.id,
      title: this.title,
      authors: this.authors,
      publisher: this.publisher
    };
    let readingList = [];

    // read file and convert JSON
    readingList = JSON.parse(fs.readFileSync(this.list));
    let index = readingList.findIndex(x => x.id === this.id);

    // If book doesnt exist add it to list
    if (index === -1) {
      readingList.push(book);
      console.log(`   
            -------------------------------------     
              "${this.title}" Added To Your List    
            -------------------------------------`);
    } else {
      console.log(`   
              -------------------------   
              Book Already On Your List   
              -------------------------`);
    }
    // Convert to JSON and save list
    fs.writeFileSync("readingList.json", JSON.stringify(readingList));

    // item.saveToList();
    console.log(`Type | node reads my "reading list" | to view your list 
    
    `);
  }
}

module.exports = Book;
