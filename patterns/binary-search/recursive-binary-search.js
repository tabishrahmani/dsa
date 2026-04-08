class Solution {
  recursiveBinarySearch(arr, k, low, high) {
    if (high < low) return -1;

    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === k) return mid;

    if (arr[mid] > k) return this.recursiveBinarySearch(arr, k, low, mid - 1);

    return this.recursiveBinarySearch(arr, k, mid + 1, high);
  }

  /**
   * @param {number[]} arr
   * @param {number} k
   * @return {number}
   */
  binarySearch(arr, k) {
    return this.recursiveBinarySearch(arr, k, 0, arr.length - 1);
  }
}

const sol = new Solution();
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5];
const k = 3;

console.log(sol.binarySearch(arr, k));
