# My Reads

Search for books and construct a personal reading list via command line!

### Initial Setup

For the app to work, add Google Books API credentials to .env file. Visit developers.google.com/books to retrieve your own API key.

I have included an example file called **.env_example**.
Erase the **\_example** part of the file name and edit the file contents, replacing **YOUR_API_KEY** with your Google Books Api key.

```
GOOGLE_BOOKS_API_KEY=YOUR_API_KEY
```

Run npm install to install node packages.

```
npm install
```

## Using the App

There are two different commands, one used to search for a book and adding to reading list, and the other to display reading list.

### Search & Add to Reading List

To search, run app with search term in quotes.

```
node reads "love stories"
```

The search will populate a list of 5 books. Select one and it will be added to your reading list.

### View Reading List

To view your reading list, run app with keyword **my** and **reading list** in quotes.

```
node reads my "reading list"
```

## Running Tests

I use the testing framework 'Jest' for mocks and unit tests. For more infomation about jest, visit jestjs.io.

In order to run these tests, run npm install if you have not already. Then in your package.json, edit the test script to 'jest'. This should already be configured for you.

```
"scripts": {
    "test": "jest"
  }
```

After that setup, you can run tests by typing **npm test** in the command line.

```
npm test
```

## Enjoy!
