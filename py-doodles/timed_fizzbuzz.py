import time
from typing import Callable


def timer(func: Callable[[int], None]):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        return_value = func(*args, **kwargs)
        print(f"Running {func.__name__} took: {time.time() - start_time}s")
        return return_value
    return wrapper


@timer
def fizzbuzz(n: int):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


@timer
def fastbuzz(n: int):
    result = []
    for i in range(1, n + 1):
        output = ""
        if i % 3 == 0:
            output += "Fast"
        if i % 5 == 0:
            output += "Buzz"
        if not output:
            output = f"{i}"
        result.append(output)
    # print('\n'.join(result))


N = 100000
fizzbuzz(N)
fastbuzz(N)
