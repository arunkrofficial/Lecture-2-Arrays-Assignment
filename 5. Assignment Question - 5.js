function maximumProduct(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    const n = nums.length;
    // The maximum product will either be the product of the three largest numbers
    // or the product of the two smallest (potentially negative) numbers and the largest number
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const option2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(option1, option2);
  }
  
  // Test the function
  let nums = [1, 2, 3];
  let maxProduct = maximumProduct(nums);
  console.log(maxProduct); // Output: 6
  