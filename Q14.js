// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist

function getTotalX(a, b) {
  let count = 0;

  let start = Math.max(...a); // 4
  let end = Math.min(...b); // 16

  for (let num = start; num <= end; num++) {
    let isValid = true;

    for (let i = 0; i < a.length; i++) {
      if (num % a[i] !== 0) {
        isValid = false;
        break;
      }
    }

    for (let j = 0; j < b.length; j++) {
      if (b[j] % num !== 0) {
        isValid = false;
        break;
      }
    }

    if (isValid) count++;
  }

  return count;
}
console.log(getTotalX([2, 4], [16, 32, 96]));
