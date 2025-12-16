// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to calculate their comparison points by comparing each category:

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i <= a.length - 1; i++) {
    if(a[i] > b[i]){
        alice++
    }
    if(a[i] < b[i]){
        bob++
    }
  }

  return [alice, bob]
}

console.log(compareTriplets([4, 2, 3], [3, 2, 1]));

