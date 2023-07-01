import { expect, test } from "vitest";
import LRU from "../algorithms/LRU";

test("LRU - least recently used cache", () => {
  const lru = new LRU(2);

  lru.putItem(0, "lol");
  expect(lru.getItem(0)).toBe("lol");
});

test("LRU - least recently used cache", () => {
  const lru = new LRU(2);

  lru.putItem(0, "lol0");
  lru.putItem(1, "lol1");
  lru.putItem(2, "lol2");
  // Access empty key
  expect(lru.getItem(0)).toBeUndefined();
  expect(lru.getItem(1)).toBe("lol1");
  expect(lru.getItem(2)).toBe("lol2");
});
