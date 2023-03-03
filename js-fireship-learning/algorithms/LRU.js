// LRU - "least recently used" cache
// https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU

export default class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map is auto ordered upon insert!
  }

  getItem(key) {
    const item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  putItem(key, value) {
    // delete to refresh insertion order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // evict the oldest item in the cache
    else if (this.cache.size === this.capacity) {
      this.cache.delete(this.oldestItem);
    }
    this.cache.set(key, value);
  }

  //   getter -> lets you access the oldestItem by either of formats:
  //   LRU.oldestItem OR LRU.oldestItem()
  get oldestItem() {
    console.log(`this: ${this}`);
    console.log(`this.cache: ${this.cache}`);
    console.log(`this.cache.keys(): ${this.cache.keys()}`);
    console.log(`this.cache.keys().next(): ${this.cache.keys().next()}`);
    console.log(
      `this.cache.keys().next().value: ${this.cache.keys().next().value}`
    );
    console.log(
      `this.cache.keys().next().done: ${this.cache.keys().next().done}`
    );
    return this.cache.keys().next().value;
  }
}

const lru = new LRU(10);
console.log(lru.oldestItem);
