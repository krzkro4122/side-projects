package main

import (
	"fmt"
	"math/rand"
)


func main() {
	arr := []int{}
	n := 15
	d := 30
	// Populate the array with n ints from range [0, d)
	for i := 0; i < n; i++ {
		arr = append(arr, rand.Intn(d))
	}

	fmt.Printf("Array at start: %v\n", arr)
	fmt.Printf("Array sorted  : %v\n", heapSort(arr))
}