/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-27
 * @fileoverview This program will give feedback on students performance.
 */

// variables
const numMarksInput: string | null = prompt("How many marks will you enter today?");
const numMarks: number = Number(numMarksInput);

// initialize 
let total: number = 0;

// get marks from the user
for (let i = 1; i <= numMarks; i++) {
  const markInput: string | null = prompt(`Enter mark ${i}:`);
  const mark: number = Number(markInput);
  total += mark;
}

// calculate average
const average: number = total / numMarks;

// output
console.log(`You entered ${numMarks} marks. Average: ${average}%`);

if (average <= 49) {
  console.log("The student is failing.");
} else if (average <= 69) {
  console.log("Performance is just under average.");
} else if (average <= 79) {
  console.log("Performance is average.");
} else {
  console.log("The student is on the honour roll.");
}

console.log("\nDone.");