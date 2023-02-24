import { fibIterative } from "../build/fibIterative";

test("Test the iterative fibonacci approach.", () => {
  expect(fibIterative(6)).toBe(8);
  expect(fibIterative(7)).toBe(13);
  expect(fibIterative(8)).toBe(21);
  expect(fibIterative(50)).toBe(12586269025);
});
