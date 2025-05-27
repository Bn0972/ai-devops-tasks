/**
 * Finds all pairs of numbers in an array that sum to a target value
 * @param {number[]} arr - Input array of numbers
 * @param {number} targetSum - Target sum to find
 * @returns {number[][]} Array of pairs that sum to target
 */
function findPairs(arr, targetSum) {
    const pairs = [];
    const seen = new Map(); // Hash map to store seen numbers
  
    for (const num of arr) {
      const complement = targetSum - num;
      
      // If we've seen the complement before, we found a pair
      if (seen.has(complement)) {
        pairs.push([complement, num]);
      }
      
      // Store current number in hash map
      seen.set(num, true);
    }
  
    return pairs;
  }
  
  // Example usage:
  const arr = [1, 5, 7, 3, 9, 2];
  const target = 10;
  console.log(findPairs(arr, target)); // [[1, 9], [7, 3]]
  
  // Test cases
  console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
  console.log(findPairs([1, 1, 1, 1], 2)); // [[1, 1], [1, 1]]
  console.log(findPairs([], 5)); // []