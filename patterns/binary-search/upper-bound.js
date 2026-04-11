class Solution {
  /**
   * The upper bound of a number is defined as the smallest index in the sorted array where the element is greater than the given number.
   * @param {number[]} arr
   * @param {number} target
   * @returns {number}
   */
  upperBound(arr, target) {
    // code here
    const n = arr.length;
    let l = 0,
      h = n - 1,
      ans = n;

    while (h >= l) {
      const mid = Math.floor((l + h) / 2);
      if (arr[mid] > target) {
        h = mid - 1;
        ans = mid;
      } else {
        l = mid + 1;
      }
    }

    return ans;
  }
}
