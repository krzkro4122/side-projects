package main

import (
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	filename := "./data.txt"

	data, err := readFile(filename)
	check(err)
	// fmt.Print(data)

	lines := splitLines(data)
	// fmt.Print(lines)

	result, err := findSum(lines)
	check(err)
	fmt.Printf("%d", result)
}

func readFile(filename string) (string, error) {
	data, error := os.ReadFile(filename)
	return string(data), error
}

func splitLines(input string) []string {
	return strings.Split(string(input), "\n")
}

func findSum(lines []string) (int, error) {
	sum := 0
	for _, line := range lines {
		if len(line) == 0 {
			continue
		}

		firstDigit, err := findFirstDigit(line)
		if err != nil {
			return -1, errors.New("couldn't find first digit")
		}

		lastDigit, err := findLastDigit(line)
		if err != nil {
			return -1, errors.New("couldn't find first digit")
		}

		additive, err := constructAdditive(firstDigit, lastDigit)
		if err != nil {
			return -1, errors.New("couldn't sum the first and last digit")
		}
		sum += additive
	}
	return sum, nil
}

func findFirstDigit(line string) (int, error) {
	for _, character := range line {
		char := fmt.Sprintf("%c", character)
		parsed, err := strconv.Atoi(char)
		if err == nil {
			return parsed, nil
		}
	}
	return -1, errors.New("couldn't find a digit")
}

func findLastDigit(line string) (int, error) {
	reversedLine := reverseString(line)
	return findFirstDigit(reversedLine)
}

func constructAdditive(firstDigit int, lastDigit int) (int, error) {
	concatenatedCharacters := fmt.Sprintf("%d%d", firstDigit, lastDigit)
	return strconv.Atoi(concatenatedCharacters)
}

func reverseString(input string) (output string) {
	for _, character := range input {
		output = string(character) + output
	}
	return
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
