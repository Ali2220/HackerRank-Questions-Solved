// Staircase detail

// This is a staircase of size n = 4:

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.
// Rules yaad rakho:

// 1. Total rows = n
// 2. Har row me total characters = n
// 3. Aage spaces
// 4. End me #
// 5. Last line me zero spaces

function staircase(n) {
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let hashes = "#".repeat(i + 1);
    console.log(spaces + hashes);
  }
}

staircase(4);
