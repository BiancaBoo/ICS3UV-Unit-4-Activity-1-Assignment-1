/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-27
 * @fileoverview This program will give feedback on students performance.
 */

// variables
let numMarksString: string = "";
let numMarks: number = 0;
let markString: string = "";
let markNumber: number = 0;
let total: number = 0;

// input number of marks
numMarksString = prompt("How many marks will you enter today? ") || "0";
numMarks = parseInt(numMarksString);

// loop through each mark
for (let counter: number = 1; counter <= numMarks; counter++) {
  markString = prompt(`Enter mark ${counter}: `) || "0";
  markNumber = parseFloat(markString);
  total += markNumber;
}

// calculate average
const average: number = total / numMarks;

// output
console.log(`\nYou have entered ${numMarks} marks. The student's average is ${average}%.`);

if (average <= 49) {
  console.log("The student is failing.");
} else if (average <= 69) {
  console.log("The student's performance is just under average.");
} else if (average <= 79) {
  console.log("The student's performance is average.");
} else {
  console.log("The student is on the honour roll.");
}

console.log("\nDone.");