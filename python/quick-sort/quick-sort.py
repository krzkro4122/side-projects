def quick_sort_out_of_place(array: list[int]) -> list[int]:
    ...


def quick_sort_in_place(array: list[int], low: int, high: int) -> None:

    if low < high:
        pivot = partition(array, low, high)
        quick_sort_in_place(array, low, pivot - 1)
        quick_sort_in_place(array, pivot + 1, high)


def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] < pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i + 1], array[high] = array[high], array[i + 1]
    return i + 1


def main():
    test_array = [1, 2, 3, 0, 0, 0, 4, 123, 13, 25, 8, 9]
    print(f"Unsorted: {test_array=}")
    quick_sort_in_place(test_array, 0, len(test_array) - 1)
    print(f"Sorted: {test_array=}")


if __name__ == "__main__":
    main()
