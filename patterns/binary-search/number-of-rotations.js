class Solution {
  /**
   * @param {number[]} arr
   * @returns {number}
   */
  findKRotation(arr) {
    const n = arr.length;
    let l = 0,
      h = n - 1,
      ans = Infinity,
      index;

    while (h >= l) {
      const mid = Math.floor((h + l) / 2);

      if (arr[l] <= arr[h]) {
        if (arr[l] < ans) {
          ans = arr[l];
          index = l;
        }
        break;
      }

      if (arr[mid] >= arr[l]) {
        if (arr[l] < ans) {
          ans = arr[l];
          index = l;
        }
        l = mid + 1;
      } else {
        if (arr[mid] < ans) {
          ans = arr[mid];
          index = mid;
        }
        h = mid - 1;
      }
    }
    return index;
  }
}
