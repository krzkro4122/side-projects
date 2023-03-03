export default function cumulativeSum(numbers) {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}
const arr = [1, 2, 3, 4, 10, 2020];
const result = cumulativeSum(arr);
console.log(result); // Expected 2040

// OR

function sum(arr) {
  let total = 0;
    //   for (const value of arr) {
    //     total += value;
    //   }
    // OR
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
  return total;
}

const result1 = sum(arr);
console.log(result1);
