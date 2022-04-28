# Binary Search

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

#____________________________________________________________


# First Bad Version
def firstBadVersion(self, n: int) -> int:
    min = 1
    max = n

    while min < max:

        mid = min + (max - min) // 2
        flag = isBadVersion(mid)

        if flag == False:
            min = mid + 1
        elif flag == True:
            max = mid

    return max


____________________________________________________________


# 35. Search Insert Position


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
        return end + 1


#____________________________________________________________