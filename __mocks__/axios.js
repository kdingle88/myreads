// Will mock axios.get and return books in this file instead of API

const books = {
  items: [
    {
      id: "_ojXNuzgHRcC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Vijaya Khisty Bodach"],
        publisher: "Fake Publisher"
      }
    },
    {
      id: "xJNFDwAAQBAJ",
      volumeInfo: {
        title: "Hello Hello",
        authors: ["Brendan Wenzel"],
        publisher: "Chronicle Books"
      }
    },
    {
      id: "AgMZWyOQhZkC",
      volumeInfo: {
        title: "Hello! Next Time We Will Be Friends",
        authors: ["James Ottley"],
        publisher: "Xlibris Corporation"
      }
    },
    {
      id: "_ojXNuzgHRcC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Vijaya Khisty Bodach"],
        publisher: "Fake Publisher"
      }
    },
    {
      id: "xJNFDwAAQBAJ",
      volumeInfo: {
        title: "Hello Hello",
        authors: ["Brendan Wenzel"],
        publisher: "Chronicle Books"
      }
    },
    {
      id: "AgMZWyOQhZkC",
      volumeInfo: {
        title: "Hello! Next Time We Will Be Friends",
        authors: ["James Ottley"],
        publisher: "Xlibris Corporation"
      }
    },
    {
      id: "_ojXNuzgHRcC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Vijaya Khisty Bodach"],
        publisher: "Fake Publisher"
      }
    },
    {
      id: "xJNFDwAAQBAJ",
      volumeInfo: {
        title: "Hello Hello",
        authors: ["Brendan Wenzel"],
        publisher: "Chronicle Books"
      }
    },
    {
      id: "AgMZWyOQhZkC",
      volumeInfo: {
        title: "Hello! Next Time We Will Be Friends",
        authors: ["James Ottley"],
        publisher: "Xlibris Corporation"
      }
    }
  ]
};

module.exports = {
  get: jest.fn(() => Promise.resolve({ data: books }))
};
