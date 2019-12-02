const buildQuery = (str = process.argv[2]) => {
  if (typeof str != "string") {
    console.error("Must enter a string value");
    return;
  }
  const querySearch = str;

  const queryString = querySearch.toLowerCase().replace(/\s+/g, "+");
  return queryString;
};

module.exports = buildQuery;
