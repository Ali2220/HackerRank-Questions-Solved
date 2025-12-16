// In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

// Complete the aVeryBigSum function with the following parameter(s):
// int ar[n]: an array of integers

function aVeryBigSum(arr) {
  let sum = 0n;  // BigInt

  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + BigInt(arr[i]);
  }
  return sum;
}

console.log(aVeryBigSum([50000, 10000, 200000, 8900000, 489000000]));

