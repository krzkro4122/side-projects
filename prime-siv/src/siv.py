
# pirme siv
import sys
import timeit


def timer(func):
    def wrapper(*args, **kwargs):
        execution_time = timeit.timeit(lambda: func(*args, **kwargs), number=1)
        print(f"Function execution took {execution_time:.6f} seconds")
        return func(*args, **kwargs)
    return wrapper


@timer
def prime_siv(n):
    # create a list of all numbers from 2 to n
    nums = [*range(2, n + 1)]
    # create a list of all prime numbers
    primes = []

    while nums:
        # get the first number in the list
        prime = nums[0]
        primes.append(prime)
        # remove all multiples of the prime number from the list
        nums = [num for num in nums if num % prime != 0]
    return primes


# main function
def main():
    # read command line arguments
    n = int(sys.argv[1])
    primes = prime_siv(n)
    # print(primes)


if __name__ == "__main__":
    main()
