const { sum } = require("../sum");
test("Should add two numbers correctly", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
