/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-27
 * @fileoverview This program will give feedback on students performance.
 */

package main

import (
	"fmt"
)

func main() {
	var numMarks int
	var total float64 = 0

	// Input number of marks
	fmt.Print("How many marks will you enter today? ")
	fmt.Scan(&numMarks)

	// Loop through each mark
	for counter := 1; counter <= numMarks; counter++ {
		var mark float64
		fmt.Printf("Enter mark %d: ", counter)
		fmt.Scan(&mark)
		total += mark
	}

	// Calculate average
	average := total / float64(numMarks)

	// Output
	fmt.Printf("\nYou have entered %d marks. The student's average is %.2f%%.\n", numMarks, average)

	if average <= 49 {
		fmt.Println("The student is failing.")
	} else if average <= 69 {
		fmt.Println("The student's performance is just under average.")
	} else if average <= 79 {
		fmt.Println("The student's performance is average.")
	} else {
		fmt.Println("The student is on the honour roll.")
	}

	fmt.Println("\nDone.")
}