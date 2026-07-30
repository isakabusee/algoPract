// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    const obj = {};
    for (let i=0; i<nums.length; i++) {
        const char = nums[i];
        const differences = target - char;
        if(obj[char] != null ){
            return [obj[char], i];
        } else {
            obj[differences] = i;
        }
    }
}
console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]
console.log(twoSum([3,2,4], 6)); // Output: [1, 2]
