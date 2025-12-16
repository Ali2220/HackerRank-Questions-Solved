// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below

// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9 = 15.
// The right-to-left diagonal = 3 + 5 + 9 = 17.
// Their absolute difference is |15 - 17| = 2.

/* Solution: 
Remember The Rule: 

for left to right diagonal: row index == column index
for right to left diagonal: row index + column index = n - 1 

*/
function diagonalDifference(arr) {
  let n = arr.length; // 3
  let left = 0;
  let right = 0;

  for (let i = 0; i < n; i++) {
    left = left + arr[i][i];
    right = right + arr[i][n - 1 - i];
  }

  return Math.abs(left - right);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
