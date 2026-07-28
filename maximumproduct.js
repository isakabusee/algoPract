// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

const maximumProduct = (nums) => {
    nums.sort((a,b)=> a-b);
    const n = nums.length;
    const product1 = nums[n-1] * nums[n-2] * nums[n-3];
    const product2 = nums[0] * nums[1] * nums[n-1];
    return Math.max(product1, product2);
}
console.log(maximumProduct([1,2,3])); // Output: 6
console.log(maximumProduct([1,2,3,4])); // Output: 24
console.log(maximumProduct([-10,-10,5,2 ])); // Output: 500