class Solution {
  firstOccurrence(arr, target, n) {
    let l = 0,
      h = n - 1,
      ans = -1;
    while (h >= l) {
      const mid = Math.floor((h + l) / 2);
      if (arr[mid] >= target) {
        h = mid - 1;
        if (arr[mid] === target) {
          ans = mid;
        }
      } else {
        l = mid + 1;
      }
    }
    return ans;
  }

  lastOccurrence(arr, target, n) {
    let l = 0,
      h = n - 1,
      ans = -1;
    while (h >= l) {
      const mid = Math.floor((h + l) / 2);
      if (arr[mid] <= target) {
        l = mid + 1;
        if (arr[mid] === target) {
          ans = mid;
        }
      } else {
        h = mid - 1;
      }
    }
    return ans;
  }

  /**
   * @param {number[]} arr
   * @param {number} target
   * @returns {number}
   */
  countFreq(arr, target) {
    // code here
    const n = arr.length;
    const firstOcc = this.firstOccurrence(arr, target, n);
    if (firstOcc === -1) return 0;

    const lastOcc = this.lastOccurrence(arr, target, n);

    return lastOcc - firstOcc + 1;
  }
}
