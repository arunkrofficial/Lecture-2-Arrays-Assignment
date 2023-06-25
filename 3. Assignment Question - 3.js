function findLHS(nums) {
    const numFreq = new Map();
    let maxLen = 0;
  
    // Count the frequency of each number
    for (let num of nums) {
      numFreq.set(num, (numFreq.get(num) || 0) + 1);
    }
  
    // Iterate through the numbers and find the longest harmonious subsequence
    for (let [num, freq] of numFreq) {
      if (numFreq.has(num + 1)) {
        maxLen = Math.max(maxLen, freq + numFreq.get(num + 1));
      }
    }
  
    return maxLen;
  }
  
  // Test the function
  let nums = [1, 3, 2, 2, 5, 2, 3, 7];
  let longestSubsequence = findLHS(nums);
  console.log(longestSubsequence); // Output: 5
  