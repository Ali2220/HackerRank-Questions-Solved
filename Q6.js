// Given an array of integers, calculate the ratios of its elements that are postive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  let pos = 0,
    neg = 0,
    zero = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) pos++;
    else if (arr[i] < 0) neg++;
    else zero++;
  }

  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
