class Solution {
  /**
   * @param {number[]} arr
   * @param {number} k
   * @return {number}
   */
  binarySearch(arr, k) {
    const n = arr.length;
    let low = 0,
      high = n - 1;

    while (high >= low) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid] === k) return mid;
      if (arr[mid] > k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
}

const sol = new Solution();
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5];
const k = 3;

console.log(sol.binarySearch(arr, k));
