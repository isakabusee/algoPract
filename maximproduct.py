#  Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

def maximumProduct(nums):
    nums.sort()
    return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])
print(maximumProduct([-10,-10,5,2]))  # Output: 500
