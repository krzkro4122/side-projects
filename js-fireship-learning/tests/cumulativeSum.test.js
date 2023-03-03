import { expect, test } from "vitest";
import cumulativeSum from "../algorithms/cumulativeSum";

test("Cumulative sum of an array", () => {
  expect(cumulativeSum([1, 2, 3, 7])).toBe(13);
  expect(cumulativeSum([-0, 0, -1, -1, -2, -3, 7])).toBe(0);
  expect(cumulativeSum([])).toBe(0);
});
