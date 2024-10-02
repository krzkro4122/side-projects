class Solution:
    def search(self, nums: list[int], target: int) -> int:
        low = 0
        high = len(nums) - 1

        while low <= high:
            middle = low + ((high - low) // 2)
            print(middle, low, high)
            value = nums[middle]
            print(value)

            if value == target:
                return middle
            elif target > value:
                low = middle + 1
            else:
                high = middle - 1

        return -1


if __name__ == "__main__":
    # assert Solution().search(nums=[-1, 0, 3, 5, 9, 12], target=9) != -1
    # assert Solution().search(nums=[-1, 0, 3, 5, 9, 12], target=2) == -1

    # assert Solution().search(nums=[5], target=5) != -1
    # assert Solution().search(nums=[], target=5) == -1

    assert Solution().search(nums=[-1, 0, 3, 5, 9, 12], target=0) != -1
    assert Solution().search(nums=[-1, 0, 3, 5, 9, 12], target=10) == -1
