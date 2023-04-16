package learn

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func logCount(counter *int, message string) {
	fmt.Printf("[%d] %s\n", *counter, message)
	*counter++
}

func swap[T any](x, y T) (T, T) {
	return y, x
}

func main() {
	counter := 0

	{
		logCount(&counter, "This is main.")
		logCount(&counter, fmt.Sprintf("LOL is it %d already?", time.Now().Year()))
		logCount(&counter, fmt.Sprintf("Kanye was here and he likes the number %d.", rand.Intn(420-69)+69))
		logCount(&counter, fmt.Sprintf("Type: %T - Value: %#v - Intigger: %d", 69, 69, 69))
		logCount(&counter, fmt.Sprintf("Type: %T - Value: %#v - Floatness(2): %.2f - Exponent: %e", math.Pi, math.Pi, math.Pi, math.Pi))
		logCount(&counter, fmt.Sprintf("Type: %T - Value: %#v - Truthiness: %t", true, true, true))
		logCount(&counter, fmt.Sprintf("Type: %T - Value: %#v - Escaped go-char: %c - Unicode: %U", 'c', 'c', 'c', 'c'))
	}

	logCount(&counter, swap("Love", "ly"))

	return
}
