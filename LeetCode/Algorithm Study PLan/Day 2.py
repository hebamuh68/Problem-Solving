#977. Squares of a Sorted Array


from typing import List

def sortedSquares(nums: List[int]) -> List[int]:
    i = 0
    n = len(nums)
    j = n - 1

    new = [0] * n
    k = n - 1

    while i <= j:
        if abs(nums[i]) < abs(nums[j]):
            new[k] = nums[j] ** 2
            j -= 1

        else:
            new[k] = nums[i] ** 2
            i += 1
        k -= 1

    return new

__________________________________________________________
#189. Rotate Array


for i in range(k):
            nums.insert(0, nums[-1])
            nums.pop()
        return nums
