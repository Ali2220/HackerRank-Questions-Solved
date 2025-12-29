// Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example:
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Simple hai: 12 hour format ko 24 hour format mai convert krna hai.

// Rules:

// AM:
// 12 AM --> 00
// 01 - 11AM --> same

// PM:
// 12PM --> 12
// 01 - 11PM --> hour + 12

function timeConversion(s) {
  // String ke last 2 characters nikaal raha hai
  // Ye hota hai AM ya PM
  let period = s.slice(-2); // AM ya PM

  // String ke pehle 8 characters nikaal raha hai
  // jaise (07:05:45)
  let time = s.slice(0, 8); // hh:mm:ss

  //   Time ko : se tod raha hai
  let [hh, mm, ss] = time.split(":");

  // Check: time AM ka hai ya nahi
  if (period === "AM") {
    if (hh === "12") {
      hh = "00";
    }
  }

  // else wala code PM ke liye hai.
  else {
    if (hh !== "12") {
      hh = String(Number(hh) + 12);
    }
  }

  return `${hh}:${mm}:${ss}`;
}

console.log(timeConversion("01:05:45AM"));
