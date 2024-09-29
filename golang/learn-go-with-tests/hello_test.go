package main

import (
	"testing"
)

func TestHelloHappy(t *testing.T) {
	got := Hello("world")
	want := "Hello world!"

	if got != want {
		t.Errorf("Got: %q but want %q", got, want)
	}
}

func TestHelloNoString(t *testing.T) {
	got := Hello("")
	want := "Hello !"

	if got != want {
		t.Errorf("Got: %q but want %q", got, want)
	}
}
