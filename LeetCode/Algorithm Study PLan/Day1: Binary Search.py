# Approach 1: Binary Search

def search(nums, target):
    min = 0
    max = len(nums) - 1

    while min <= max:
        # mid = (max - min) // 2, then add the part we checked to skip it and not
        # start from beginning
        mid = min + (max - min) // 2
        if target == nums[mid]:
            return mid
        elif target < nums[mid]:
            max = mid - 1
        else:
            min = mid + 1

    return -1


print(search([-1, 0, 3, 5, 9, 12], 9))

____________________________________________________________
#278. First Bad Version

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):

        if n <= 0: return 0

        left, right = 1, n

        while left <= right:
            mid = left + (right - left) // 2

            if not isBadVersion(mid):
                left = mid + 1
            else:
                right = mid - 1
        return left
____________________________________________________________
#35. Search Insert Position


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        self.target = target

        while start <= end:
            mid = (start + end) // 2
            guess = nums[mid]

            if guess == self.target:
                return mid
            if guess > self.target:
                end = mid - 1
            else:
                start = mid + 1
        return end +1

____________________________________________________________
