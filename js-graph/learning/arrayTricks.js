// Creating a range of numbers
const range = Array(100)
  .fill(0)
  .map((_value, index) => index);
console.log(range);
// Or
const normalRange = [...Array(100).keys()];
console.log(normalRange);

// Remove duplicates from an array
const arr = [1, 2, 2, 3, 4, 5];
const unique = [...new Set(arr)];
console.log(arr, unique);

// Get a random element
const random = arr[Math.floor(Math.random() * arr.length)];
console.log(random);

// Loop over a kv pair
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}

// arr.forEach();
arr.forEach((value, index, array) => console.log(value, index, array));
// arr.map(); - same as forEach but returns the resulting array
const resultArray = arr.map((value, index, array) =>
  value === index ? value : array
);
console.log(resultArray);
// arr.filter();
const filteredArray = arr.filter((value, index) => value === index);
console.log(filteredArray);
// arr.find();
const foundElement = arr.find((value, index) => value === index && value > 4);
console.log(foundElement);
// arr.findIndex();
const foundIndex = arr.findIndex((value) => value === 1);
console.log(foundIndex);
// arr.reduce();
const sum = arr.reduce(
  (previousValue, currentValue, currentIndex, array) =>
    previousValue + currentValue
);
console.log(sum);

// for of VS for in
for (const val of arr) {
  console.log(val);
}

// DONT !!!
// for (const val in arr) {
//   console.log(val);
// }

for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
