function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;
    let i = 0;
  
    while (i < length) {
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1; // Plant a flower
        count++;
  
        if (count === n) {
          return true;
        }
      }
  
      i++;
    }
  
    return false;
  }
  
  // Test the function
  let flowerbed = [1, 0, 0, 0, 1];
  let n = 1;
  let canPlant = canPlaceFlowers(flowerbed, n);
  console.log(canPlant); // Output: true
  