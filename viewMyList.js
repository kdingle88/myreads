const fs = require("fs");

const viewMyList = listFile => {
  if (typeof listFile !== "string") {
    console.error("Must enter a string ");
    return;
  }

  if (fs.existsSync(listFile) === false) {
    console.error("List does not Exist. Please Enter a valid list name");
    return;
  }

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
