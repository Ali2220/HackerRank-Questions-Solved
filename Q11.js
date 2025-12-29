// HackerLand University has the following grading policy:
// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:
// 1. If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// 2. If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Agar grades < 38, to kuch bhi mat karo, same marks rehne do
// Agar grades > 38 hain, to check kro ke grades ko minus (-) with multipleof5 krne se agr 3 se chota araha hai, to grade ko multpleOf5 bna do, wrna wese hi rehna do.

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

console.log(gradingStudents([62, 77, 83, 90, 38, 27]));

