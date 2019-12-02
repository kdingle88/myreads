const buildQuery = require("../buildQuery");

test("Returns a string", () => {
  expect(typeof buildQuery()).toBe("string");
});
