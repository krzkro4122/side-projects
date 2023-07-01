# Fibonacci optimized
import time

from typing import Dict


def timer(callback):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        rv = callback(*args, **kwargs)
        print(f"Run took: {time.time() - start_time:.5f}s")
        return rv
    return wrapper


def fib(n: int, memo: Dict[int, int] = {}):

    if n in memo.keys():
        return memo.get(n)

    if n in [1, 2]:
        return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    return memo[n]


def test_fib():
    @timer
    def _single_test(n, wanted):
        value = fib(n)
        print(f'fib({n}) = {value}')
        assert value == wanted

    tests = {
        1: 1,
        2: 1,
        3: 2,
        4: 3,
        10: 55,
        40: 102334155,
    }

    for value, wanted in tests.items():
        _single_test(value, wanted)

    print("All tests passed!")


if __name__ == "__main__":
    test_fib()