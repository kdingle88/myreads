# My Reads

Search for books and construct a personal reading list via command line

## Using the App

There are two different commands, one used to search for a book and adding to reading list, and the other to display reading list

_Make sure to add API credentials to .env file for it to work. I have included an example file called **.env_example**_

_Also, Run npm install to install node packages_

```
npm install
```

### Search & Add to Reading List

To search, run app with search term in quotes

```
node reads "love stories"
```

The search will populate a list of 5 books. Select one and it will be added to your reading list

### View Reading List

To view your reading list, run app with keyword my and reading list in quotes

```
node reads my "reading list"
```

## Enjoy!
