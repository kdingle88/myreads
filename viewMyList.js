const fs = require("fs");

const viewMyList = listFile => {
  const bookList = JSON.parse(fs.readFileSync(listFile));
  console.log(`   
            -------------------------------------     
                    Your Reading  List    
            -------------------------------------`);
  bookList.forEach(book =>
    console.log(
      `Title: ${book.title} | Author(s): ${book.authors} | Publisher: ${book.publisher}
              `
    )
  );
};

module.exports = viewMyList;
