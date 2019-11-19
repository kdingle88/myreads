const buildQuery = (str = process.argv[2]) => {
  const querySearch = str;

  const queryString = querySearch.toLowerCase().replace(/\s+/g, "+");
  return queryString;
};

module.exports = buildQuery;
