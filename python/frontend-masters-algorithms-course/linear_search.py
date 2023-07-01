def linear_search(iterable, target):

    for i in range(len(iterable)):
        if iterable[i] == target:
            return i

    return -1


def main():
    print("Running tests...")
    assert linear_search([1, 2, 3, 4], 2) == 1
    assert linear_search([1, 2, 3, 4], 5) == -1
    assert linear_search([13 * n for n in range(100)], 1287) == 99
    assert linear_search([1, 2, 3, 4]*40, 2) == 1
    assert linear_search([1, 2, 3, 4], 0) == -1
    print("Tests passed!")
    


if __name__ == "__main__":
    main()
