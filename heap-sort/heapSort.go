package main

import "fmt"

func findLargest(arr []int) (int, int) {

	largest := arr[0]
	largestIndex := 0

	for index, value := range arr {
		if largest < value {
			largest = value
			largestIndex = index
		}
	}
	return largest, largestIndex
}

func heapify(arr *[]int) []int {

	// Arbitrairly large number
	var _, largestIndex int = findLargest(*arr)

	// I decided to merge three steps:
	// 1. rootIndex := arr[0]
	// 2. swap arr[rootIndex] with arr[largestIndex]
	// 3. swap arr[rootIndex] with arr[len(arr) - 1]
	// into two steps step:
	rootIndex := len(*arr) - 1
	(*arr)[rootIndex], (*arr)[largestIndex] = (*arr)[largestIndex], (*arr)[rootIndex]

	return (*arr)[0:len((*arr)) - 1]
}

func formatArray (arr []int, sorted bool) string {

	// RGB 😍
	var colorReset string = "\033[0m"
	var colorRed string = "\033[31m"
	var colorGreen string = "\033[32m"

	str := ""

	if sorted {
		str += colorGreen
	} else {
		str += "[" + colorRed
	}

	for _, v := range arr {
		str = fmt.Sprintf("%s %d", str, v)
	}

	if sorted {
		return fmt.Sprintf("%s ]%s", str, colorReset)
	} else {
		return fmt.Sprintf("%s%s", str, colorReset)
	}
}


func heapSort(arr []int) []int {

	// Instantiate a helper array containing unsorted elements
	new_array := arr

	// Loop through the array and heapify it
	for i := 1 ;; i++{
		new_array = heapify(&new_array)

		fmt.Printf("Step %2d - Whole array: %s%s - Unsorted part: %v\n",
			i,
			formatArray(arr[:len(new_array)], false),
			formatArray(arr[len(new_array):], true),
			new_array,
		)


		if len(new_array) <= 1 {
			break
		}
	}
	return arr
}