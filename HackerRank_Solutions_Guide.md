# HackerRank JavaScript Solutions Guide
## Complete Beginner-Friendly Explanations (Roman Urdu)

---

## Q1 – Simple Addition

### Problem Understanding
Tumhein do numbers diye gaye hain `a` aur `b`. Tumhein sirf inko add karke return karna hai.

**Example:** Agar `a = 7` aur `b = 3` hai, to answer `10` hoga.

### Mindset
Ye sabse basic problem hai. Yahan sirf addition operator `+` use karna hai. Koi loop ya condition ki zarurat nahi.

### Solution Flow
1. Function ko do parameters milenge: `a` aur `b`
2. Dono ko add karo
3. Result return karo

### Code Explanation (Roman Urdu)

```javascript
function solveMeFirst(a, b) {
  return a + b
}
```

**Line by line:**
- `function solveMeFirst(a, b)` → Ek function banaya jiska naam `solveMeFirst` hai aur ye 2 parameters leta hai
- `return a + b` → Dono numbers ko add karke wapas bhej do

**Analogy:** Jaise tumhare paas 7 apples hain aur 3 aur mil gaye, to total kitne? 10! Bas yehi kaam hai.

---

## Q2 – Array Sum

### Problem Understanding
Tumhein ek array diya gaya hai jisme numbers hain. Tumhein un sab numbers ka sum nikalna hai.

**Example:** `[1, 2, 3]` → Answer: `6` (kyunki 1+2+3 = 6)

### Mindset
Jab bhi array ke saare elements par kuch karna ho, to **loop** use karo. Yahan har element ko ek variable mein add karte jao.

### Solution Flow
1. Ek variable `sum` banao aur usko `0` set karo
2. Loop chalao array ke har element par
3. Har element ko `sum` mein add karte jao
4. Loop khatam hone ke baad `sum` return karo

### Code Explanation (Roman Urdu)

```javascript
function simpleArraySum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
```

**Line by line:**
- `let sum = 0;` → Ek khaali dabba banaya jisme hum numbers jama karenge, shuru mein 0 hai
- `for (let i = 0; i <= arr.length - 1; i++)` → Loop shuru kiya. `i` 0 se start hoga aur array ki last index tak jayega
- `sum = sum + arr[i];` → Current element ko sum mein add kar rahe hain
- `return sum;` → Final total return kar diya

**Analogy:** Jaise tumhare paas 3 jars hain jinme coins hain. Tumhe total coins count karne hain. Ek ek jar kholo, count karo, aur total mein add karte jao.

---

## Q3 – Compare Triplets

### Problem Understanding
Alice aur Bob ne do problems banaye. Har problem ko 3 categories mein marks mile: clarity, originality, difficulty.

Tumhein compare karna hai:
- Agar Alice ka number bada hai → Alice ko 1 point
- Agar Bob ka number bada hai → Bob ko 1 point  
- Agar equal hain → Kisi ko point nahi

**Example:** `a = [4,2,3]` aur `b = [3,2,1]`
- Index 0: 4 > 3 → Alice +1
- Index 1: 2 = 2 → Koi point nahi
- Index 2: 3 > 1 → Alice +1
- Result: `[2, 0]` (Alice: 2, Bob: 0)

### Mindset
Jab do arrays ko compare karna ho **same index** par, to loop chalao aur har index par condition check karo.

### Solution Flow
1. Do variables banao: `alice = 0` aur `bob = 0`
2. Loop chalao array ke har index par
3. Har index par compare karo aur points add karo
4. Final `[alice, bob]` return karo

### Code Explanation (Roman Urdu)

```javascript
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
```

**Line by line:**
- `let alice = 0; let bob = 0;` → Dono ke liye score counter banaye, shuru mein 0
- `for (let i = 0; i <= a.length - 1; i++)` → Har index par jayenge
- `if(a[i] > b[i]) { alice++ }` → Agar Alice ka number bada hai to uska score +1
- `if(a[i] < b[i]) { bob++ }` → Agar Bob ka number bada hai to uska score +1
- `return [alice, bob]` → Dono ke final scores ek array mein return kar diye

**Analogy:** Jaise cricket match mein har over ke baad runs compare karte hain. Jis team ne zyada banaye, usko point milta hai.

---

## Q4 – Very Big Sum

### Problem Understanding
Tumhein bohot bade numbers ka sum nikalna hai. Normal JavaScript numbers se handle nahi hoga kyunki wo bohot bade hain.

**Example:** `[50000, 10000, 200000]` → Ye numbers itne bade ho sakte hain ke normal `number` type overflow ho jaye.

### Mindset
Jab numbers bohot bade hon (billions, trillions), to **BigInt** use karo. Ye JavaScript ka special data type hai jo bohot bade numbers handle kar sakta hai.

### Solution Flow
1. `sum` variable ko `0n` set karo (ye BigInt hai)
2. Loop chalao array par
3. Har number ko `BigInt()` mein convert karo aur sum mein add karo
4. Final sum return karo

### Code Explanation (Roman Urdu)

```javascript
function aVeryBigSum(arr) {
  let sum = 0n;  // BigInt

  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + BigInt(arr[i]);
  }
  return sum;
}
```

**Line by line:**
- `let sum = 0n;` → `0n` matlab ye BigInt type ka zero hai (notice the 'n')
- `for (let i = 0; i <= arr.length - 1; i++)` → Array ke har element par loop
- `sum = sum + BigInt(arr[i]);` → Har number ko pehle BigInt mein convert karo, phir add karo
- `return sum;` → Final BigInt sum return karo

**Analogy:** Jaise calculator chote numbers handle karta hai, lekin bohot bade numbers ke liye scientific calculator chahiye. BigInt wo scientific calculator hai.

---

## Q5 – Diagonal Difference

### Problem Understanding
Tumhein ek square matrix diya gaya hai (jaise tic-tac-toe board). Tumhein 2 diagonals ka sum nikalna hai aur unka difference return karna hai.

**Example:**
```
1 2 3
4 5 6
9 8 9
```
- Left diagonal: 1+5+9 = 15
- Right diagonal: 3+5+9 = 17
- Difference: |15-17| = 2

### Mindset
Matrix problems mein **pattern** dhundo:
- Left diagonal: row index = column index (0,0), (1,1), (2,2)
- Right diagonal: row + column = n-1

### Solution Flow
1. Matrix ki size `n` nikalo
2. Do variables banao: `left` aur `right`
3. Loop chalao 0 se n-1 tak
4. Left diagonal: `arr[i][i]`
5. Right diagonal: `arr[i][n-1-i]`
6. Absolute difference return karo

### Code Explanation (Roman Urdu)

```javascript
function diagonalDifference(arr) {
  let n = arr.length;
  let left = 0;
  let right = 0;

  for (let i = 0; i < n; i++) {
    left = left + arr[i][i];
    right = right + arr[i][n - 1 - i];
  }

  return Math.abs(left - right);
}
```

**Line by line:**
- `let n = arr.length;` → Matrix ki size (3x3 hai to n=3)
- `let left = 0; let right = 0;` → Dono diagonals ke sum ke liye variables
- `for (let i = 0; i < n; i++)` → Har row par loop
- `left = left + arr[i][i];` → Left diagonal element add karo (row aur column same)
- `right = right + arr[i][n - 1 - i];` → Right diagonal element add karo
- `return Math.abs(left - right);` → Absolute difference (hamesha positive)

**Analogy:** Tic-tac-toe board mein ek line top-left se bottom-right jati hai, doosri top-right se bottom-left. Dono lines ke numbers jama karo aur fark nikalo.

---

## Q6 – Plus Minus

### Problem Understanding
Tumhein ek array diya gaya hai. Tumhein 3 cheezein calculate karni hain:
1. Kitne positive numbers hain (ratio)
2. Kitne negative numbers hain (ratio)
3. Kitne zeros hain (ratio)

Har ratio ko 6 decimal places tak print karna hai.

**Example:** `[1, 1, 0, -1, -1]`
- Positive: 2/5 = 0.400000
- Negative: 2/5 = 0.400000
- Zero: 1/5 = 0.200000

### Mindset
Counting problem hai. Teen alag counters banao aur loop mein conditions check karo.

### Solution Flow
1. Teen counters banao: `pos`, `neg`, `zero`
2. Array ki length `n` store karo
3. Loop chalao aur har element check karo
4. Har counter ko `n` se divide karke print karo with 6 decimals

### Code Explanation (Roman Urdu)

```javascript
function plusMinus(arr) {
  let pos = 0, neg = 0, zero = 0;
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
```

**Line by line:**
- `let pos = 0, neg = 0, zero = 0;` → Teen counters ek saath declare kiye
- `let n = arr.length;` → Total elements count
- `if (arr[i] > 0) pos++;` → Agar positive hai to pos counter +1
- `else if (arr[i] < 0) neg++;` → Agar negative hai to neg counter +1
- `else zero++;` → Warna zero counter +1
- `(pos / n).toFixed(6)` → Ratio calculate karo aur 6 decimals tak round karo

**Analogy:** Class mein 5 students hain. 2 pass, 2 fail, 1 absent. Ratio nikalo: pass=2/5, fail=2/5, absent=1/5.

---

## Q7 – Staircase

### Problem Understanding
Tumhein ek staircase print karna hai jo `#` symbols se bana ho. Staircase ki height `n` hai.

**Example:** n=4
```
   #
  ##
 ###
####
```

### Mindset
Pattern printing problem hai. Har line mein:
- Pehle spaces aati hain
- Phir hashes aati hain
- Total characters = n (har line mein)

### Solution Flow
1. Loop chalao 0 se n-1 tak (har row ke liye)
2. Har row mein pehle spaces print karo
3. Phir hashes print karo
4. Formula yaad rakho:
   - Spaces = n - i - 1
   - Hashes = i + 1

### Code Explanation (Roman Urdu)

```javascript
function staircase(n) {
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let hashes = "#".repeat(i + 1);
    console.log(spaces + hashes);
  }
}
```

**Line by line:**
- `for (let i = 0; i < n; i++)` → n rows print karni hain
- `let spaces = " ".repeat(n - i - 1);` → Kitni spaces chahiye? Pehli line mein 3, phir 2, phir 1, phir 0
- `let hashes = "#".repeat(i + 1);` → Kitni hashes? Pehli line mein 1, phir 2, phir 3, phir 4
- `console.log(spaces + hashes);` → Pehle spaces, phir hashes print karo

**Analogy:** Seedhiyan bana rahe ho. Neeche wali step sabse badi, upar wali sabse choti. Har step ke pehle thodi jagah (space) chhodni hai.

---

## Q8 – Mini-Max Sum

### Problem Understanding
Tumhein 5 numbers diye gaye hain. Tumhein sirf 4 numbers ka sum nikalna hai (ek ko chhod kar).
- **Minimum sum:** Sabse bade number ko chhod do
- **Maximum sum:** Sabse chote number ko chhod do

**Example:** `[1,3,5,7,9]`
- Min sum = 1+3+5+7 = 16 (9 ko chhoda)
- Max sum = 3+5+7+9 = 24 (1 ko chhoda)

### Mindset
Pehle total sum nikalo. Phir:
- Min sum = total - max element
- Max sum = total - min element

### Solution Flow
1. Array ka max aur min element dhundo
2. Total sum calculate karo
3. Min sum = total - max
4. Max sum = total - min
5. Dono print karo

### Code Explanation (Roman Urdu)

```javascript
function miniMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(total - max, total - min);
}
```

**Line by line:**
- `let max = arr[0]; let min = arr[0];` → Pehle element ko max aur min maan lo
- `let total = 0;` → Total sum ke liye variable
- `total = total + arr[i];` → Har element ko total mein add karo
- `if (arr[i] < min) { min = arr[i]; }` → Agar current element chota hai to min update karo
- `if (arr[i] > max) { max = arr[i]; }` → Agar current element bada hai to max update karo
- `console.log(total - max, total - min);` → Min sum aur max sum print karo

**Analogy:** 5 dost hain. Sabse ameer ko chhod kar baaki ka total = minimum total. Sabse gareeb ko chhod kar baaki ka total = maximum total.

---

## Q9 – Birthday Cake Candles

### Problem Understanding
Birthday cake par candles lagi hain. Bachcha sirf sabse lambi candles hi phook sakta hai. Tumhein count karna hai kitni candles sabse lambi hain.

**Example:** `[4,4,1,3]`
- Sabse lambi = 4
- Count = 2 (do candles 4 height ki hain)

### Mindset
Pehle sabse badi value dhundo, phir count karo kitni baar wo value aayi hai.

### Solution Flow
1. Array mein se maximum value dhundo
2. Counter banao
3. Loop chalao aur jahan bhi max value mile, counter +1
4. Counter return karo

### Code Explanation (Roman Urdu)

```javascript
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
```

**Line by line:**
- `let tallest = Math.max(...candles);` → `Math.max()` se sabse badi value nikali. `...` spread operator hai jo array ko alag alag values mein tod deta hai
- `let count = 0;` → Counter shuru kiya
- `if (candles[i] === tallest) { count++; }` → Jahan bhi tallest value mile, count +1
- `return count;` → Final count return karo

**Analogy:** Class mein sabse lamba student dhundo. Phir dekho kitne students us height ke hain.

---

## Q10 – Time Conversion

### Problem Understanding
12-hour format (AM/PM) ko 24-hour format mein convert karna hai.

**Rules:**
- **AM:** 12:xx:xxAM → 00:xx:xx, baaki same
- **PM:** 12:xx:xxPM → 12:xx:xx, baaki mein +12

**Example:**
- `12:01:00AM` → `00:01:00`
- `01:05:45PM` → `13:05:45`

### Mindset
String manipulation problem hai. Time ko parts mein todo, AM/PM check karo, aur rules apply karo.

### Solution Flow
1. String ke last 2 characters nikalo (AM ya PM)
2. Time part nikalo (hh:mm:ss)
3. Time ko `:` se split karo
4. AM/PM ke hisaab se hour adjust karo
5. Final time return karo

### Code Explanation (Roman Urdu)

```javascript
function timeConversion(s) {
  let period = s.slice(-2); // AM ya PM
  let time = s.slice(0, 8); // hh:mm:ss
  let [hh, mm, ss] = time.split(":");

  if (period === "AM") {
    if (hh === "12") {
      hh = "00";
    }
  }
  else {
    if (hh !== "12") {
      hh = String(Number(hh) + 12);
    }
  }

  return `${hh}:${mm}:${ss}`;
}
```

**Line by line:**
- `let period = s.slice(-2);` → String ke aakhri 2 characters (AM/PM)
- `let time = s.slice(0, 8);` → Pehle 8 characters (07:05:45)
- `let [hh, mm, ss] = time.split(":");` → `:` se split karke hour, minute, second alag kiye (destructuring)
- `if (period === "AM")` → Agar AM hai
- `if (hh === "12") { hh = "00"; }` → 12 AM ko 00 bana do
- `else { if (hh !== "12") { hh = String(Number(hh) + 12); } }` → PM mein 12 ko chhod kar sab mein +12
- `return ${hh}:${mm}:${ss};` → Template literal se final string banai

**Analogy:** Jaise mobile mein 12-hour aur 24-hour format hota hai. 1 PM = 13:00, 2 PM = 14:00, etc.

---

## Q11 – Grading Students

### Problem Understanding
Professor grades round karta hai special rules se:
1. Agar grade < 38, to kuch mat karo (fail hai)
2. Agar grade >= 38 aur next multiple of 5 se difference < 3 hai, to round up karo

**Example:**
- 84 → Next multiple = 85, difference = 1 → Round to 85
- 57 → Next multiple = 60, difference = 3 → No rounding (57 hi rahega)
- 38 → Next multiple = 40, difference = 2 → Round to 40
- 33 → < 38 → No rounding (33 hi rahega)

### Mindset
Har grade par conditions check karo. Pehle 38 check karo, phir multiple of 5 ka logic.

### Solution Flow
1. Result array banao
2. Har grade par loop chalao
3. Agar < 38, to waise hi push karo
4. Agar >= 38:
   - Next multiple of 5 nikalo
   - Difference check karo
   - Agar < 3, to next multiple push karo
   - Warna original grade push karo

### Code Explanation (Roman Urdu)

```javascript
function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      let nextMultiple = Math.ceil(grades[i] / 5) * 5;

      if (nextMultiple - grades[i] < 3) {
        result.push(nextMultiple);
      } else {
        result.push(grades[i]);
      }
    }
  }

  return result
}
```

**Line by line:**
- `let result = [];` → Final grades ke liye empty array
- `if (grades[i] < 38) { result.push(grades[i]); }` → Agar 38 se kam hai to waise hi rakhdo
- `let nextMultiple = Math.ceil(grades[i] / 5) * 5;` → Next multiple of 5 nikala. `Math.ceil()` upar round karta hai
- `if (nextMultiple - grades[i] < 3)` → Agar difference 3 se kam hai
- `result.push(nextMultiple);` → To next multiple push karo
- `else { result.push(grades[i]); }` → Warna original grade push karo

**Analogy:** Exam mein agar tumhare 84 marks hain aur 85 tak sirf 1 mark ki kami hai, to teacher meherbani karke 85 de deta hai. Lekin agar 82 hain to nahi dega (3 marks ka gap hai).

---

## Q12 – Apples and Oranges

### Problem Understanding
Sam ka ghar `s` se `t` tak hai. Apple tree `a` par hai, orange tree `b` par hai.
Fruits girte hain aur distance `d` travel karte hain:
- Negative d = left side
- Positive d = right side

Tumhein count karna hai kitne apples aur oranges ghar par gire.

**Formula:** Landing position = tree position + distance

### Mindset
Har fruit ka landing position calculate karo. Agar wo `s` aur `t` ke beech hai, to count karo.

### Solution Flow
1. Apple aur orange ke liye alag counters banao
2. Har apple ka landing position = a + distance
3. Check karo agar landing >= s aur <= t
4. Same oranges ke liye
5. Dono counts print karo

### Code Explanation (Roman Urdu)

```javascript
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
```

**Line by line:**
- `let appleCount = 0; let orangeCount = 0;` → Dono fruits ke counters
- `let landing = a + apples[i];` → Apple tree ki position + distance = landing position
- `if (landing >= s && landing <= t)` → Agar ghar ki boundary mein gira
- `appleCount++;` → Count +1
- Same logic oranges ke liye repeat

**Analogy:** Ghar 7 se 10 meter par hai. Apple tree 5 meter par hai. Ek apple 3 meter door gira (5+3=8). 8 ghar ke andar hai (7 se 10 ke beech), to count karo.

---

## Q13 – Kangaroo

### Problem Understanding
Do kangaroos hain jo number line par jump kar rahe hain.
- Kangaroo 1: Start `x1`, Jump speed `v1`
- Kangaroo 2: Start `x2`, Jump speed `v2`

Tumhein batana hai ke kya wo **kabhi bhi same time par same jagah** milenge ya nahi? Agar haan to `YES`, nahi to `NO`.

### Mindset
Ye physics ka relative velocity problem hai.
1. Agar peeche wala kangaroo (x1) dheema (slower) hai, to wo kabhi aage wale ko pakad nahi payega. (`v1 <= v2` → NO)
2. Agar wo tez hai, to check karna hai ke kya wo exact jumps mein gap cover kar sakta hai.

### Solution Flow
1. Check karo: Agar `v1 <= v2`, to `NO` return karo (kyunki x1 hamesha peeche rahega).
2. Gap check karo: `(x2 - x1) % (v1 - v2) === 0`
   - Iska matlab: Total distance gap, relative speed se poora divide hona chahiye.
3. Agar remainder 0 hai, to `YES`, warna `NO`.

### Code Explanation (Roman Urdu)

```javascript
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
```

**Line by line:**
- `if (v1 <= v2) { return "NO"; }` → Agar peeche wala kangaroo dheema hai ya barabar speed hai, to wo aage wale ko kabhi cross nahi karega.
- `if ((x2 - x1) % (v1 - v2) === 0)` → Mathematical trick:
  - `x2 - x1`: Dono ke beech ka shuru ka faasla (distance gap).
  - `v1 - v2`: Har jump mein kitna gap kam ho raha hai (relative speed).
  - Agar total gap, har jump ke gap se poora divide ho jaye, matlab wo kisi na kisi jump par milenge.

**Analogy:** Chor police ka peecha kar raha hai. Agar chor police se tez bhaag raha hai, to kabhi na kabhi pakad lega, lekin sirf tab jab distance barabar cover ho.

---

## Q14 – Between Two Sets

### Problem Understanding
Do arrays hain: `a` aur `b`. Tumhein wo numbers dhoondne hain jo:
1. `a` ke saare numbers se divide hon (Factor of `a` elements).
2. `b` ke saare numbers ko divide karein (Factor of `b` elements).

In dono rules ko maanane wale kitne numbers hain?

**Example:** `a = [2, 4]`, `b = [16, 32, 96]`
- Numbers check karo `4` se lekar `16` tak.
- `4`: 2 aur 4 se divide hota hai? Haan. 16, 32, 96 ko divide karta hai? Haan. -> Count it.
- `8`: 2 aur 4 se divide hota hai? Haan. 16, 32, 96 ko divide karta hai? Haan. -> Count it.
- `12`: 16 ko divide nahi karta.
- Answer: 2 numbers (4 aur 8).

### Mindset
Range dhundo: `a` ke sabse bade number se lekar `b` ke sabse chote number tak check karo.

### Solution Flow
1. Range start karo `Math.max(...a)` se aur end karo `Math.min(...b)` tak.
2. Har number ke liye check karo:
   - Kya ye `a` ke sab element se divide hota hai? (`num % a[i] === 0`)
   - Kya ye `b` ke sab element ko divide karta hai? (`b[j] % num === 0`)
3. Agar dono condition true hain, to count +1.

### Code Explanation (Roman Urdu)

```javascript
function getTotalX(a, b) {
  let count = 0;
  let start = Math.max(...a);
  let end = Math.min(...b);

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
```

**Line by line:**
- `let start = Math.max(...a);` → Check karna shuru karo `a` ke sabse bade number se.
- `let end = Math.min(...b);` → Check karna khatam karo `b` ke sabse chote number par.
- `let isValid = true;` → Maan lo ke ye number sahi hai, ab check karenge.
- `if (num % a[i] !== 0)` → Agar `a` ka koi bhi number isko divide nahi karta, to ye number bekaar hai (`isValid = false`).
- `if (b[j] % num !== 0)` → Agar ye number `b` ke kisi bhi number ko divide nahi karta, to bekaar hai.
- `if (isValid) count++;` → Agar sab tests pass kar liye, to count karo.

**Analogy:** Tumhein wo students dhoondne hain jo Teacher A ki baat bhi maanein aur Teacher B ki baat bhi. Dono ki conditions poori honi chahiye.

---

## Q15 – CamelCase

### Problem Understanding
Tumhein ek string di gayi hai jo CamelCase mein likhi hai. Tumhein batana hai ke usme kitne words hain.
CamelCase rule: Pehla word lowercase, baaki har naya word uppercase letter se shuru hota hai.

**Example:** `saveChangesInTheEditor`
- Words: save, Changes, In, The, Editor
- Count = 5

### Mindset
Pehla word hamesha hota hai (kyunki string khali nahi hai). Uske baad jitne bhi Uppercase letters milenge, utne naye words hain.

### Solution Flow
1. Counter ko `1` se start karo (pehla word).
2. String par loop chalao.
3. Agar koi letter Uppercase hai (`A-Z`), to counter +1 karo.
4. Final count return karo.

### Code Explanation (Roman Urdu)

```javascript
function camelcase(s) {
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      count++;
    }
  }

  return count;
}
```

**Line by line:**
- `let count = 1;` → Pehle word ke liye 1 rakha hai, kyunki pehla word lowercase hota hai aur loop usay count nahi karega.
- `if (s[i] === s[i].toUpperCase())` → Check kar rahe hain ke kya ye letter bada (Capital) hai? Jaise 'C', 'I', 'T', 'E'.
- `count++;` → Agar bada letter mila, matlab naya word shuru hua.

**Analogy:** Train ke dibbe count karne hain. Engine (pehla word) count kar liya. Ab jahan jahan naya connection (Capital Letter) dikhe, wahan agla dibba shuru.

---

## Q16 – Pangrams

### Problem Understanding
Pangram wo sentence hota hai jisme English ke saare alphabets (a se z tak) kam az kam ek baar aate hon.
Tumhein batana hai ke di gayi string "pangram" hai ya "not pangram".

**Example:** "The quick brown fox jumps over the lazy dog" → Isme saare letters hain.

### Mindset
Humein sirf unique letters se matlab hai. Agar unique letters ki ginti 26 ho gayi, to wo pangram hai.
Iske liye **Set** data structure best hai, kyunki Set duplicates ko count nahi karta.

### Solution Flow
1. String ko lowercase mein convert karo (taake 'A' aur 'a' same count hon).
2. Ek khaali Set banao.
3. String ke har character par loop chalao.
4. Agar character 'a' se 'z' ke beech hai, to Set mein add karo.
5. End mein check karo: Agar Set ka size 26 hai, to "pangram", warna "not pangram".

### Code Explanation (Roman Urdu)

```javascript
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
```

**Line by line:**
- `const uniqueAlphabets = new Set();` → Ek jhola banaya jisme sirf unique cheezein ayengi.
- `let alphabets = s.toLowerCase();` → Saare letters chote kar liye.
- `if (alphabets[i] >= "a" && alphabets[i] <= "z")` → Sirf a-z letters chahiye, spaces ya numbers nahi.
- `uniqueAlphabets.add(alphabets[i]);` → Jhola mein letter daal do. Agar pehle se hai to Set khud hi ignore kar dega.
- `if (uniqueAlphabets.size === 26)` → Agar jhole mein poore 26 letters hain, to bas kaam hogaya.

**Analogy:** Album mein stickers chipkane hain. Tumhein A se Z tak saare stickers chahiye. Repeats ka koi faida nahi. Agar album full (26 stickers) hai, to tum jeet gaye.

---

## Q17 – Alternating Characters

### Problem Understanding
Tumhein ek string di gayi hai jisme sirf 'A' aur 'B' hain (jaise `AABABB`). Tumhein aise characters delete karne hain taake koi bhi same character saath mein na ho.
Matlab `AA` nahi hona chahiye, `BB` nahi hona chahiye. Sirf `ABABA...` allowed hai.
Kitne deletions karne padenge?

**Example:** `AABABB`
- `AA` → Ek 'A' delete karo (`ABABB`)
- `BB` → Ek 'B' delete karo (`ABAB`)
- Total deletions = 2

### Mindset
Bas saath wale character ko check karo. Agar currrent character aur pichla character same hain, to delete count bada do.

### Solution Flow
1. `deletions` counter 0 rakho.
2. Loop chalao index 1 se lekar end tak.
3. Check karo: Kya `s[i]` (aaj ka) aur `s[i-1]` (kal ka) same hain?
4. Agar same hain, to `deletions++`.
5. Return deletions.

### Code Explanation (Roman Urdu)

```javascript
function alternatingCharacters(s) {
    let deletions = 0

    for(let i = 1 ; i < s.length; i++){
        if(s[i] === s[i - 1]){
            deletions++
        }
    }
    return deletions
}
```

**Line by line:**
- `for(let i = 1 ; i < s.length; i++)` → Hum 1 se shuru kar rahe hain taake `i-1` check kar sakein.
- `if(s[i] === s[i - 1])` → Agar abhi wala aur pichla wala same hain (jaise A aur A), to duplicate hai.
- `deletions++` → Duplicate mila, usko imaginary delete kar diya (count badha diya).

**Analogy:** Dominoes line mein lage hain. Agar do laal (Red) dominoes saath hain, to ek ko hata do taake pattern Red-Blue-Red-Blue rahe.

---


