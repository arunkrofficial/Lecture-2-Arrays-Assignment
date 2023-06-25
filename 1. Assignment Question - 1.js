function arrayPairSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
      result += nums[i];
    }
    return result;
  }
  
  // Test the function
  let nums = [1, 4, 3, 2];
  let maximizedSum = arrayPairSum(nums);
  console.log(maximizedSum); // Output: 4
  