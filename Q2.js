// Given an array of integers, find the sum of its elements.
// For example, if the array ar = [1, 2, 3]. 1 + 2 + 3 = 6 , , so return 6.

function simpleArraySum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(simpleArraySum([1, 2, 3]));
