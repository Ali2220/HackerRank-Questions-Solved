// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// 1. The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// 2. Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
// 3. When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t] )?

// Remeber this formula:
// landing = postion of tree + distance

// Apple ka position = a + d
// Orange ka position = b + d
// Agar position s aur t ke beech ho → count++

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    let landing = a + apples[i];

    if (landing >= s && landing <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    let landing = b + oranges[i];

    if (landing >= s && landing <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 10, 5, 15, [-2, 2, 1], [-5, -3, -2]);
