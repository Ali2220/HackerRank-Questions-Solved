// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Peeche wala kangaroo tabhi mil sakta hai jab wo tez ho aur exact jumps mein gap khatam kare.
function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) {
        return "NO";
    }

    if ((x2 - x1) % (v1 - v2) === 0) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(kangaroo(2,1,1,2));

