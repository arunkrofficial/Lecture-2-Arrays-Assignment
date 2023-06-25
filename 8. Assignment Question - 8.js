function minimumScore(nums, k) {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
  
    if (maxVal - minVal <= 2 * k) {
      return 0;
    }
  
    const score1 = maxVal - k - (minVal + k);
    const score2 = maxVal - (minVal - k + k);
  
    return Math.min(score1, score2);
  }
  
  // Test the function
  let nums = [1];
  let k = 0;
  let minScore = minimumScore(nums, k);
  console.log(minScore); // Output: 0
  