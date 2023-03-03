const obj1 = {
  one: "a",
  two: "b",
  three: "c",
};

const obj2 = {
  three: "d",
  four: "e",
  five: "f",
};

// Different results because the last spread
// overrides the overlapping values from the original
console.log({ ...obj1, ...obj2 });
console.log({ ...obj2, ...obj1 });

const objMerge = {
  ...obj1,
  ...obj2,
  ...obj1,
};
console.log(objMerge);

const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6, 7, 8];
console.log(arr);
console.log(newArr);
