function maxCandies(candyType) {
    const uniqueCandies = new Set();
  
    for (let candy of candyType) {
      uniqueCandies.add(candy);
  
      // Stop adding candies once Alice reaches n/2 limit
      if (uniqueCandies.size === candyType.length / 2) {
        break;
      }
    }
  
    return uniqueCandies.size;
  }
  
  // Test the function
  let candyType = [1, 1, 2, 2, 3, 3];
  let maxDifferentTypes = maxCandies(candyType);
  console.log(maxDifferentTypes); // Output: 3
  