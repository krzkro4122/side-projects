package main

import (
	"testing"
)

func TestHelloHappy(t *testing.T) {
	t.Run("Saying hello to people", func(t *testing.T) {
		got := Hello("world")
		want := "Hello world!"
		assertCorrectMessage(t, got, want)
	})
	t.Run("Saying hello to the world", func(t *testing.T) {
		got := Hello("")
		want := "Hello world!"
		assertCorrectMessage(t, got, want)
	})
}

func assertCorrectMessage(t testing.TB, got, want string) {
	t.Helper()
	if got != want {
		t.Errorf("Got: %q but want %q", got, want)
	}
}
