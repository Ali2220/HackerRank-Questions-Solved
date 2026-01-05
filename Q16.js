// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Pangram wo sentence hota hai jisme: English alphabet ke saare 26 letters (a–z) kam az kam 1 dafa aaye hon

function pangrams(s) {
  const uniqueAlphabets = new Set();
  let alphabets = s.toLowerCase();

  for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i] >= "a" && alphabets[i] <= "z") {
      uniqueAlphabets.add(alphabets[i]);
    }
  }

  if (uniqueAlphabets.size === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

console.log(pangrams("The quick brown fox jumps over the lzy dog"));
