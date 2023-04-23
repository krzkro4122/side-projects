import { expect, test } from "vitest";
import binarySearch from "../algorithms/binarySearch";

test("[HAPPY] Binary search on arrays", () => {
  const arr = ["a", "b", "c", "d", "e", "x", "y", "z"];
  expect(binarySearch(arr, "a")).toBe(0);
  expect(binarySearch(arr, "z")).toBe(7);
  expect(binarySearch(arr, "d")).toBe(3);
  expect(binarySearch(arr, "f")).toBe(-1);
});

test("[EMPTY] Binary search on arrays", () => {
  const arr = [];
  expect(binarySearch(arr, "a")).toBe(-1);
  expect(binarySearch(arr, "z")).toBe(-1);
  expect(binarySearch(arr, "d")).toBe(-1);
  expect(binarySearch(arr, "f")).toBe(-1);
});
