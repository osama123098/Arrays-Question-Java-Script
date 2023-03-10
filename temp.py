def find_missing_and_duplicate(nums):
    n = len(nums)
    A, B = 0, 0
    for x in nums:
        index = abs(x) - 1
        if nums[index] > 0:
            nums[index] *= -1
        else:
            A = abs(x)
    for i in range(n):
        if nums[i] > 0:
            B = i + 1
            break
    return [A, B]

find_missing_and_duplicate([1,2,3,4,2,6])