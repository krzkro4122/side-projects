const arr = ["a", "b", "c", "d", "e", "x", "y", "z"];

// Brute-force method, functional but way too slow -> O(N) time complexity
function naiveSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(naiveSearch(arr, "x")); // found at 5
console.log(naiveSearch(arr, "f")); // not found (-1)

// Binary search -> the array has to be sorted BUT it has O(logn) time complexity
export default function binarySearch(
  arr,
  target,
  start = 0,
  end = arr.length - 1
) {
  if (start > end) {
    console.log("Not found!");
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    console.log(`Found ${target} at index: ${middle}`);
    return middle;
  }
  if (arr[middle] > target) {
    return binarySearch(arr, target, start, middle - 1);
  }
  if (arr[middle] < target) {
    return binarySearch(arr, target, middle + 1, end);
  }
}

console.log(binarySearch(arr, "a")); // found at 0
console.log(binarySearch(arr, "z")); // found at 7
console.log(binarySearch(arr, "d")); // found at 3
console.log(binarySearch(arr, "f")); // Not found! (-1)
