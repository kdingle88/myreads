const buildQuery = (str = process.argv[2]) => {
  if (typeof str != "string") {
    throw Error("Must Enter string value");
  }
  const querySearch = str;

  const queryString = querySearch.toLowerCase().replace(/\s+/g, "+");
  return queryString;
};

module.exports = buildQuery;
