import { fibRecursive } from "../build/fibRecursive";

test("Test the recursive fibonacci approach.", () => {
  expect(fibRecursive(6)).toBe(8);
  expect(fibRecursive(7)).toBe(13);
  expect(fibRecursive(8)).toBe(21);
  expect(fibRecursive(50)).toBe(12586269025);
});
