// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

// Example

// Candles = [4,4,1,3]

// The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

function birthdayCakeCandles(candles) {
  let tallest = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallest) {
      count++;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([4,4,1,3]));
