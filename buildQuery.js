const buildQuery = () => {
  const querySearch = process.argv[2];

  const queryString = querySearch.toLowerCase().replace(/\s+/g, "+");
  return queryString;
};

module.exports = buildQuery;
