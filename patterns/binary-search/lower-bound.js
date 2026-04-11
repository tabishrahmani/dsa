class Solution {
  /**
   * The lower bound of a number is defined as the smallest index in the sorted array where the element is greater than or equal to the given number.
   * @param {number[]} arr
   * @param {number} target
   * @returns {number}
   */
  lowerBound(arr, target) {
    // code here
    let ans = arr.length,
      low = 0,
      high = arr.length - 1;

    while (high >= low) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] >= target) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
}
