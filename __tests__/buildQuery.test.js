const buildQuery = require("../buildQuery");

test("Returns a string", () => {
  expect(typeof buildQuery("harry")).toBe("string");
});
